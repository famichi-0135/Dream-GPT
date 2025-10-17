"use server";
// import { PrismaClient } from "@/generated/prisma";
import { createClient } from "@/utils/supabase/server";
import { todoList } from "./type";
import { error } from "console";

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
