"use server";
// import { PrismaClient } from "@/generated/prisma";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

// const prisma = new PrismaClient();

// use `prisma` in your application to read and write data in your DB
// export async function insertUserId(id: string) {
//   try {
//     const user = prisma.users.create({
//       data: {
//         userId: id,
//       },
//     });

//     console.log(user);
//   } catch (error) {
//     console.error("Error fetching user Credit", error);
//     return 0;
//   }
// }

export async function selectAllGoals() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("Goals")
      .select("title, goalId");
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
      .eq("userId", user?.id);
    console.log(data + "hoge");
    console.log(error);
    return data;
  } catch (error) {
    console.error(error);
  }
}
