"use server";
import { Progress } from "@/components/part/progress";
import { SelectUI } from "@/components/part/select";
import { TodoCardUI } from "@/components/part/todoCard";
import { TodoCard } from "@/components/todoCard";
import { Button } from "@/components/ui/button";
import { todoData } from "@/lib/type";
// import { useEffect, useState } from "react";

export default async function Page() {
  return (
    <div className="space-y-6 static">
      <div className="md:flex sm:flex-row space-x-3 space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">Todoリスト</h1>
        <SelectUI />
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 space-x-10 space-y-8">
        <TodoCardUI />
      </div>
      <Progress />
    </div>
  );
}
