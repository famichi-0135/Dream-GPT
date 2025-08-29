import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">目標を作成する</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* 左側：入力フォーム */}
        <form action="">
          <div className="px-6 py-6 rounded-xl space-y-6 bg-white shadow-md p-5  border-gray-200 transition-all hover:shadow-lg">
            <Input placeholder="目標を入力" />
            <div className="flex space-x-4">
              <Input
                className="w-full max-w-[150px]"
                placeholder="数値を入力"
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">年・月</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-32">
                  <DropdownMenuLabel></DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup>
                    <DropdownMenuRadioItem
                      id="month"
                      value="month"
                      className="font-bold text-md"
                    >
                      月
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem
                      id="year"
                      value="year"
                      className="font-bold text-md"
                    >
                      年
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Textarea
              className="min-h-40"
              placeholder="補足など（使用したい教材、考慮してほしいこと）"
            />
            <div className="flex justify-end">
              <Button className="w-24">作成</Button>
            </div>
          </div>
        </form>

        {/* 右側：ダミー枠 */}
        <div className="px-6 py-6  rounded-xl space-y-6 bg-white shadow-md p-5  border-gray-200 transition-all hover:shadow-lg">
          {/* TODO: 右側の内容を追加 */}
          <h1 className="text-xl font-bold">空白</h1>
        </div>
      </div>
    </div>
  );
}
