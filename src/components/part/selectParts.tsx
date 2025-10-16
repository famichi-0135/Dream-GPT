"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { atom, useAtom } from "jotai";
// import { atomWithStorage } from "jotai/utils";
import { useEffect } from "react";

export const selectGoalIder = atom<null | string>(null);
export function SelectUiParts({
  data,
}: {
  data: { title: string; goalId: string; MorY: string; deadlineNum: number }[];
}) {
  const [selectGoalId, setSelectGoalId] = useAtom(selectGoalIder);
  const handleValue = (goalId_MorY: string) => {
    console.log(goalId_MorY);
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
      console.log(`${data[0].goalId}/${data[0].MorY}/${data[0].deadlineNum}`);
      setSelectGoalId(
        `${data[0].goalId}/${data[0].MorY}/${data[0].deadlineNum}`
      );
    };
    setSelector(data);
  }, []);

  return (
    <Select
      defaultValue={`${data[0].goalId}/${data[0].MorY}/${data[0].deadlineNum}`}
      onValueChange={(value: string) => handleValue(value)}
    >
      <SelectTrigger className="w-[60%]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {/* <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem> */}
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
