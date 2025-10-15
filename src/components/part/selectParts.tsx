"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useEffect } from "react";

export const selectGoalIder = atom<string | null>(null);
export function SelectUiParts({
  data,
}: {
  data: { title: string; goalId: string }[];
}) {
  const [selectGoalId, setSelectGoalId] = useAtom(selectGoalIder);
  const handleValue = (data: string) => {
    console.log(data);
    setSelectGoalId(data);
  };

  useEffect(() => {
    const setSelector = (data: { title: string; goalId: string }[]) => {
      setSelectGoalId(data[0].goalId);
    };
    setSelector(data);
  }, []);

  return (
    <Select
      defaultValue={
        data && data.length > 0
          ? data[0].goalId === null
            ? "null"
            : data[0].goalId
          : "No data"
      }
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
          <SelectItem key={a.goalId} value={a.goalId}>
            {a.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
