"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { todoRequest } from "@/app/(api)/api/todoGemini/route";
import { useFormStatus } from "react-dom";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";
import { atom, useAtom } from "jotai";

export const refreshAtom = atom(0);
export function CreatePlan() {
  const [, setRefresh] = useAtom(refreshAtom);
  const [YearOrMonth, setYearOrMonth] = useState<string>("ヵ月");
  const handleForm = async (formData: FormData) => {
    const promptBody: todoRequest = {
      goal: formData.get("goal") as string,
      explain: formData.get("explain") as string,
      limitNum: Number(formData.get("limitNum")),
      YearOrMonth: YearOrMonth,
    };

    const res = await fetch("/api/todoGemini", {
      method: "POST",
      body: JSON.stringify(promptBody),
    });

    const text = await res.json();
    if (text.status === 200) {
      toast.success("計画の作成に成功しました。Todoページより確認ください");
      console.log("成功");
      // redirect("./dashboard/todo", RedirectType.replace);
      setRefresh((r) => r + 1);
    } else {
      toast.error(
        "計画の作成に失敗しました。チケットの不足または内部エラーの可能性があります。"
      );
      console.log("失敗");
    }
  };

  const handleItem = (item: string) => {
    if (item === "year") {
      setYearOrMonth("年");
    } else if (item === "month") {
      setYearOrMonth("ヵ月");
    }
  };

  function Submit() {
    const status = useFormStatus();
    if (status.pending) {
      return (
        <div className="flex justify-end">
          <Button size="sm" disabled>
            <Loader2Icon className="animate-spin" />
            Please wait
          </Button>
        </div>
      );
    } else {
      return (
        <div className="flex justify-end">
          <Button className="w-24">作成</Button>
        </div>
      );
    }
  }

  return (
    <form action={handleForm}>
      <div className="px-6 py-6 rounded-xl space-y-6 bg-white shadow-md p-5  border-gray-200 transition-all hover:shadow-lg">
        <Input placeholder="目標を入力" name="goal" required />
        <div className="flex space-x-4">
          <Input
            name="limitNum"
            className="w-full max-w-[65%]"
            placeholder="数値を入力"
            required
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="w-[30%]">
              <Button variant="outline">{YearOrMonth}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuLabel>年か月を選択</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={YearOrMonth}>
                <DropdownMenuRadioItem
                  value="month"
                  className="font-bold text-md"
                  onClick={() => handleItem("month")}
                >
                  月
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="year"
                  className="font-bold text-md"
                  onClick={() => handleItem("year")}
                >
                  年
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Textarea
          name="explain"
          className="min-h-40"
          placeholder="補足など（使用したい教材、考慮してほしいこと）"
        />
        <Submit />
      </div>
    </form>
  );
}
