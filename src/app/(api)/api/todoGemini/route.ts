import { DBPushDataType, todoData } from "@/lib/type";
import { createClient } from "@/utils/supabase/server";
import { GoogleGenAI, Type } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({});
export type todoRequest = {
  goal: string | null;
  explain: string | null;
  limitNum: number | null;
  YearOrMonth: string | null;
};

export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const body: todoRequest = await req.json();
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const { goal, explain, limitNum, YearOrMonth } = body;

  //ユーザーIDの取得

  try {
    if (goal === "") {
      throw new Error("必須項目が未入力です。");
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    //チケットが一枚以上あるか確認ないならエラー
    const { data: selectTicket, error: selectError } = await supabase
      .from("Users")
      .select("ticket")
      .eq("userId", `${user?.id}`);
    if (selectError) {
      throw new Error(`エラー:${selectError}`);
    }
    if (!selectTicket || selectTicket.length === 0) {
      throw new Error(`残りのチケット枚数の取得に失敗`);
    }

    if (selectTicket[0].ticket === 0) {
      throw new Error(`チケットが不足しています`);
    }

    console.log(goal, explain, limitNum, YearOrMonth);

    //geminiでデータ取得
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `「${goal}」という目標を${year}/${month}/${date}から${limitNum}${YearOrMonth}以内で達成するためのベストプランを考案してください。以下の指示も必ず守ること。「${explain}」`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            planName: {
              type: Type.STRING,
            },
            periodType: {
              // "week" or "month"
              type: Type.STRING,
              enum: ["year", "month"],
            },
            schedules: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  periodNumber: { type: Type.NUMBER }, // 第何週 or 何月
                  plans: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        id: { type: Type.NUMBER },
                        title: { type: Type.STRING },
                        deadline: { type: Type.STRING, format: "date" }, // "YYYY-MM-DD"
                      },
                      propertyOrdering: ["id", "title", "deadline"],
                    },
                  },
                },
                propertyOrdering: ["periodNumber", "plans"],
              },
            },
          },
          propertyOrdering: ["planName", "periodType", "schedules"],
        },
      },
    });

    //データベースに保存
    //Goalsテーブルへの目標の挿入
    const { data: goalInsertData, error: goalsError } = await supabase
      .from("Goals")
      .insert({
        deadlineNum: limitNum,
        title: goal,
        MorY: YearOrMonth,
        userId: user?.id,
      })
      .select("goalId")
      .single();

    if (goalsError) {
      throw new Error(`Goals挿入エラー${goalsError.message}`);
    }
    if (!goalInsertData) {
      throw new Error(`Goalsに挿入はしたがgoalIdを取得できなかった`);
    }

    const goalId = goalInsertData.goalId;

    //計画をデータベースに保存しやすいように整形

    const DBPushData: DBPushDataType[] = [];
    const pData: todoData = JSON.parse(response.text as string);
    console.log(pData);
    pData.schedules.forEach((data) => {
      data.plans.forEach((plan) => {
        console.log(data.periodNumber);
        DBPushData.push({
          goalId: goalId,
          periodNum: data.periodNumber,
          title: plan.title,
          deadline: plan.deadline,
          userId: user?.id,
        });
      });
    });
    console.log(DBPushData);
    console.log("この上にオブジェクトがくるはず");

    //Plansテーブルへの計画を挿入。
    const { error: plansError } = await supabase
      .from("Plans")
      .insert(DBPushData);

    console.log(goalsError, plansError);
    if (goalsError || plansError) {
      return NextResponse.json({
        status: 500,
        error: goalsError || plansError,
      });
    }

    //残りチケットを一枚減らす。

    const minusOneTicket = selectTicket[0].ticket - 1;
    console.log(minusOneTicket);

    const { error: decrementError } = await supabase
      .from("Users")
      .update({ ticket: minusOneTicket })
      .eq("userId", `${user?.id}`);

    //ここでエラーを吐くだけだとクライアントサイドでエラーになるからどうにかする必要あり。

    if (decrementError) {
      throw new Error(`エラー：${decrementError.message}`);
    }

    return NextResponse.json({ status: 200, data: response.text });
  } catch (err) {
    console.error((err as Error).message);
    return NextResponse.json({ message: err }, { status: 400 });
  } finally {
  }
}
