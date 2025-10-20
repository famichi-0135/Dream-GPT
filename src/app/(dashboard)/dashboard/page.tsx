import { CreatePlan } from "@/components/part/createGoal";

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">目標を作成する</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <CreatePlan />
        {/* 右側：ダミー枠 */}
        <div className="px-6 py-6  rounded-xl space-y-6 bg-white shadow-md p-5  border-gray-200 transition-all hover:shadow-lg">
          {/* TODO: 右側の内容を追加 */}
          <h1 className="text-xl font-bold">空白</h1>
        </div>
      </div>
    </div>
  );
}
