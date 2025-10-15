"use client";

import { useAtomValue } from "jotai";
import { selectGoalIder } from "./selectParts";
import { selectAllPlans } from "@/lib/query";
import { useEffect, useState } from "react";
import { TodoCard } from "../todoCard";

interface plans {
  uniqueId: string;
  periodNum: number;
  title: string;
  deadline: string;
  isDone: boolean;
  goalId: string;
  userId: string;
}

export function TodoCardUI() {
  const [plans, setPlans] = useState<plans[]>([]);

  const goalId = useAtomValue(selectGoalIder);
  useEffect(() => {
    const fetchPlan = async (goalId: string) => {
      const plans = await selectAllPlans(goalId);
      setPlans(plans as plans[]);
    };
    fetchPlan(goalId as string);
    console.log(plans + "hoge");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goalId]);
  // const plans = await selectAllPlans(goalId);
  // console.log(plans);
  return (
    <div className="space-y-4">
      {/* <p>{goalId}</p> */}
      {plans?.map((card: plans) => (
        <TodoCard
          key={card.uniqueId}
          title={card.title}
          deadline={card.deadline}
        />
      ))}
    </div>
  );
}
