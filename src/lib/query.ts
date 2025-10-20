"use server";
// import { PrismaClient } from "@/generated/prisma";
import { createClient } from "@/utils/supabase/server";
import { todoList } from "./type";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function selectAllGoals() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("Goals")
      .select("title, goalId, MorY, deadlineNum");
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function selectAllPlans(goalID: string) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { data, error } = await supabase
      .from("Plans")
      .select()
      .eq("goalId", goalID)
      .eq("userId", user?.id)
      .order("deadline", { ascending: true });
    console.log(data + "hoge");
    console.log(error);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function changePlansBool(props: todoList) {
  try {
    const { id, bool } = props;
    const supaase = await createClient();
    const response = await supaase
      .from("Plans")
      .update({ isDone: !bool })
      .eq("uniqueId", id);
    if (response.error) {
      throw new Error(`${response.error}`);
    }
  } catch (err) {
    console.error(err);
  }
}

export async function changePlanTitle(uniqueId: string, editTitle: string) {
  try {
    const supaase = await createClient();
    const { error } = await supaase
      .from("Plans")
      .update({ title: editTitle })
      .eq("uniqueId", uniqueId);
    if (error) {
      throw new Error(`${error}`);
    }
  } catch (err) {
    console.error(err);
  }
}

export async function deletePlan(uniqueId: string) {
  try {
    const supabase = await createClient();
    const { error } = await supabase
      .from("Plans")
      .delete()
      .eq("uniqueId", uniqueId);
    if (error) {
      throw new Error(`${error}`);
    }
  } catch (err) {
    console.error(err);
  }
}

export async function deleteGoal(goalId: string) {
  try {
    const supabase = await createClient();

    const response2 = await supabase
      .from("Plans")
      .delete()
      .eq("goalId", goalId);

    const response1 = await supabase
      .from("Goals")
      .delete()
      .eq("goalId", goalId);

    if (!response1 || !response2) {
      throw new Error(`${response1}-${response2}`);
    }
  } catch (err) {
    console.error(err);
  } finally {
    redirect("../");
  }
}

export async function getTicketCount() {
  try {
    const supabase = await createClient();

    // 現在の認証ユーザーを取得
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      throw new Error("ユーザー情報の取得に失敗しました。");
    }

    // チケット枚数を取得
    const { data, error } = await supabase
      .from("Users")
      .select("ticket")
      .eq("userId", user.id)
      .single();

    if (error) {
      throw new Error(`チケット情報の取得に失敗しました: ${error.message}`);
    }

    // 値をそのまま返す
    return { success: true, ticket: data.ticket };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: (err as Error).message,
    };
  }
}

export async function deleteAllUserData() {
  try {
    const supabase = await createClient();

    // 現在の認証ユーザーを取得
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      throw new Error("ユーザー情報の取得に失敗しました。");
    }

    const response2 = await supabase
      .from("Plans")
      .delete()
      .eq("userId", user.id);

    if (response2.error) {
      throw new Error("プラン関連情報の削除に失敗しました。");
    }
    const response1 = await supabase
      .from("Goals")
      .delete()
      .eq("userId", user.id);

    if (response1.error) {
      throw new Error("目標関連情報の削除に失敗しました。");
    }

    return { success: true, status: 200, err: null };
  } catch (err) {
    return { success: false, status: 400, err: err };
  }
}
