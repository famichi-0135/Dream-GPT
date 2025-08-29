export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">ユーザー設定</h1>
      <div className="flex-1 space-y-6 flex-col items-start justify-start py-6">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl bg-white rounded-2xl shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4">目標難易度</h1>
          <p className="text-gray-700">ここにカードの中身を記述します。</p>
        </div>
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl bg-white rounded-2xl shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4">ユーザーデータをリセット</h1>
          <p className="text-gray-700">ここにカードの中身を記述します。</p>
        </div>
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl bg-white rounded-2xl shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4 text-red-700">
            アカウントの削除
          </h1>
          <p className="text-gray-700">ここにカードの中身を記述します。</p>
        </div>
      </div>
    </div>
  );
}
