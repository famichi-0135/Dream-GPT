"use client";

import { atom, useAtom, useAtomValue } from "jotai";
import { selectGoalIder } from "./selectParts";
import { selectAllPlans } from "@/lib/query";
import { Suspense, useEffect, useState } from "react";
import { TodoCard } from "../todoCard";

export interface plans {
  uniqueId: string;
  periodNum: number;
  title: string;
  deadline: string;
  isDone: boolean;
  goalId: string;
  userId: string;
}
export const Plans = atom<null | plans[]>(null);
export function TodoCardUI() {
  const [plans, setPlans] = useAtom<null | plans[]>(Plans);
  const goalId_MorY = useAtomValue(selectGoalIder);
  const split: string[] = (goalId_MorY ?? "").split("/");
  const goalId = split[0];
  const MorY = split[1];
  const deadlineNum = split[2];
  useEffect(() => {
    const fetchPlan = async (goalId: string) => {
      const plans = await selectAllPlans(goalId);
      setPlans(plans as plans[]);
    };
    fetchPlan(goalId as string);
    // console.log(plans + "hoge");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goalId]);
  return (
    <>
      {Array.from({ length: parseInt(deadlineNum) }).map((_, i) => (
        <div key={i} className="space-y-4">
          <h2 key={i} className="font-bold text-3xl">
            {`${i + 1}${MorY === "年" ? "年目" : "ヵ月目"}`}
          </h2>
          <Suspense fallback={<Loading />}>
            {plans?.map((card: plans) =>
              card.periodNum == i + 1 ? (
                <TodoCard
                  key={card.uniqueId}
                  id={card.uniqueId}
                  bool={card.isDone}
                  title={card.title}
                  deadline={card.deadline}
                />
              ) : null
            )}
          </Suspense>
        </div>
      ))}
    </>
  );

  function Loading() {
    return <h3>🌀 Loading...</h3>;
  }
}
