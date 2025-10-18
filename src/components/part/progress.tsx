"use client";
import { useAtomValue } from "jotai";
import { plans, Plans } from "./todoCard";
import { Button } from "../ui/button";

export function Progress() {
  const allPlans = useAtomValue(Plans) ?? [];
  const donePlan = allPlans?.filter((p) => p.isDone === true);

  return (
    <div>
      {donePlan.length === allPlans.length ? (
        <Button variant="destructive">達成済プランを消去</Button>
      ) : (
        <p className="font-bold text-3xl text-indigo-600">
          {Math.trunc((donePlan.length / allPlans.length) * 100)}%
        </p>
      )}
    </div>
  );
}
