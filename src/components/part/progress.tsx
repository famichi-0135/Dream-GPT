"use client";
import { useAtomValue } from "jotai";
import { plans, Plans } from "./todoCard";
import { Button } from "../ui/button";
import { deleteGoal } from "@/lib/query";

export function Progress() {
  const allPlans: plans[] = useAtomValue(Plans) ?? [];
  const donePlan = allPlans?.filter((p) => p.isDone === true);

  const handleGoalDelete = async () => {
    console.log(allPlans[0]?.goalId);
    await deleteGoal(allPlans[0]?.goalId);
    console.log("hoge");
  };

  if (allPlans.length === 0) {
    return <></>;
  }

  return (
    <div
      className="sticky bg-white bottom-5 left-[34%] 
      lg:w-[30%] md:w-[60%] h-15 rounded-lg border-2 flex items-center justify-center"
    >
      <p className="font-bold text-md  text-indigo-800 mr-2">達成率：</p>
      <div>
        {donePlan.length === allPlans.length ? (
          <Button variant="destructive" onClick={() => handleGoalDelete()}>
            達成済目標を消去
          </Button>
        ) : (
          <p className="font-bold text-3xl text-indigo-600">
            {Math.trunc((donePlan.length / allPlans.length) * 100)}%
          </p>
        )}
      </div>
    </div>
  );
}
