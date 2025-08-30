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
  const body: todoRequest = await req.json();
  const { goal, explain, limitNum, YearOrMonth } = body;
  console.log(goal, explain, limitNum, YearOrMonth);
  const response = await ai.models.generateContent({
    model: "gemini-2.5-pro",
    contents: `${goal}を${limitNum}${YearOrMonth}で達成するためのベストプランを考案してください。以下の指示を必ず守ること。「${explain}」`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          periodType: {
            // "week" or "month"
            type: Type.STRING,
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
                      deadline: { type: Type.STRING }, // "YYYY-MM-DD"
                    },
                    propertyOrdering: ["id", "title", "deadline"],
                  },
                },
              },
              propertyOrdering: ["periodNumber", "plans"],
            },
          },
        },
        propertyOrdering: ["periodType", "schedules"],
      },
    },
  });
  console.log(response.text);
  // const data = await JSON.stringify(response.text as string);
  // console.log(data);
  return NextResponse.json({ status: 200 });
}
