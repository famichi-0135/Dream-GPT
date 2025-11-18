import { DeleteAcount } from "@/components/part/settingParts/deleteAcount";
import { DeleteUsersData } from "@/components/part/settingParts/deleteAllUserDatas";
import { SelectLevel } from "@/components/part/settingParts/selectLecel";

export default async function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">ユーザー設定</h1>
      <div className="flex-1 space-y-6 flex-col items-start justify-start py-6">
        <SelectLevel />
        <DeleteUsersData />
        <DeleteAcount />
      </div>
    </div>
  );
}
