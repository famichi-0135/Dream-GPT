"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { atom, useAtom } from "jotai";
import { useEffect } from "react";

export const selectGoalIder = atom<null | string>(null);
export function SelectUiParts({
  data,
}: {
  data: { title: string; goalId: string; MorY: string; deadlineNum: number }[];
}) {
  const [, setSelectGoalId] = useAtom(selectGoalIder);
  const handleValue = (goalId_MorY: string) => {
    setSelectGoalId(goalId_MorY);
  };

  useEffect(() => {
    const setSelector = (
      data: {
        title: string;
        goalId: string;
        MorY: string;
        deadlineNum: number;
      }[]
    ) => {
      if (data.length >= 1) {
        setSelectGoalId(
          `${data[0].goalId}/${data[0].MorY}/${data[0].deadlineNum}`
        );
      }
    };
    setSelector(data);
  }, []);

  if (data.length < 1) {
    return (
      <div className="border-2 border-indigo-200 p-2 rounded-lg bg-indigo-100 text-indigo-800">
        <p className="font-bold text-2xl">該当データなし</p>
      </div>
    );
  } else {
    return (
      <Select
        defaultValue={`${data[0].goalId}/${data[0].MorY}/${data[0].deadlineNum}`}
        onValueChange={(value: string) => handleValue(value)}
      >
        <SelectTrigger className="w-[60%]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {data?.map((a) => (
            <SelectItem
              key={a.goalId}
              value={`${a.goalId}/${a.MorY}/${a.deadlineNum}`}
            >
              {a.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }
}
