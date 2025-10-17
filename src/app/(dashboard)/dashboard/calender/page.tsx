"use server";
import { DIYCalender } from "@/components/diyCalender";

export default async function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">カレンダー</h1>
      <div className=" space-y-4 flex justify-start">
        <DIYCalender />
      </div>
    </div>
  );
}
