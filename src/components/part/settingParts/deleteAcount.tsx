import { DeleteAcountDialog } from "./settingProps/deleteAcountDialog";

export function DeleteAcount() {
  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl bg-white rounded-2xl shadow-md p-6 flex-col">
      <h1 className="text-2xl font-bold mb-4 text-red-700">アカウントの削除</h1>
      <DeleteAcountDialog />
    </div>
  );
}
