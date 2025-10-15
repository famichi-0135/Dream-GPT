import { SelectUI } from "@/components/part/select";
import { TodoCardUI } from "@/components/part/todoCard";
import { TodoCard } from "@/components/todoCard";
import { todoData } from "@/lib/type";
// import { useEffect, useState } from "react";

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="md:flex sm:flex-row space-x-3 space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">Todoリスト</h1>
        <SelectUI />
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 space-x-10 space-y-8">
        {/* {data?.schedules?.map((plan) => (
          <div className="space-y-4" key={plan.periodNumber}>
            <h2 className="font-bold text-3xl">
              {data.periodType === "year"
                ? `${plan.periodNumber}年目`
                : `${plan.periodNumber}ヵ月目`}
            </h2>
            {plan?.plans?.map((card) => (
              <TodoCard
                key={card.id}
                title={card.title}
                deadline={card.deadline}
              />
            ))}
          </div>
        ))} */}
        <TodoCardUI />
      </div>
    </div>
  );
}
