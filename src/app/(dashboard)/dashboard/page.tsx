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
    // <div className="space-y-8">
    //   <h1 className="text-4xl font-bold text-gray-900">目標を作成する</h1>
    //   <p className="text-gray-500"></p>
    //   <div className="flex flex1">
    //     <div className="lg:min-w-3xl md:min-w-2xl px-12 py-8 m-4 border rounded-xl flex-col space-y-8 bg-white">
    //       <Input />
    //       <div className="flex space-x-6 justify-end">
    //         <Input className="max-w-30" />
    //         <DropdownMenu>
    //           <DropdownMenuTrigger asChild>
    //             <Button variant="outline">年・月</Button>
    //           </DropdownMenuTrigger>
    //           <DropdownMenuContent className="w-20">
    //             <DropdownMenuLabel>年・月を選択</DropdownMenuLabel>
    //             <DropdownMenuSeparator />
    //             <DropdownMenuRadioGroup>
    //               <DropdownMenuRadioItem
    //                 value="month"
    //                 className="font-bold text-md"
    //               >
    //                 月
    //               </DropdownMenuRadioItem>
    //               <DropdownMenuRadioItem
    //                 value="year"
    //                 className="font-bold text-md"
    //               >
    //                 年
    //               </DropdownMenuRadioItem>
    //             </DropdownMenuRadioGroup>
    //           </DropdownMenuContent>
    //         </DropdownMenu>
    //       </div>
    //       <Textarea className="min-h-40" />
    //       <div className="flex justify-end">
    //         <Button className="w-24">作成</Button>
    //       </div>
    //     </div>
    //     <div className="lg:min-w-xl md:min-w-2xl px-12 py-8 m-4 border rounded-xl flex-col space-y-8 bg-white"></div>
    //   </div>
    // </div>
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">目標を作成する</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 左側：入力フォーム */}
        <div className="px-6 py-6 border rounded-xl space-y-6 bg-white">
          <Input placeholder="目標を入力" />
          <div className="flex space-x-4">
            <Input className="w-full max-w-[150px]" placeholder="数値を入力" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">年・月</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-32">
                <DropdownMenuLabel>年・月を選択</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup>
                  <DropdownMenuRadioItem
                    value="month"
                    className="font-bold text-md"
                  >
                    月
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
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

        {/* 右側：ダミー枠 */}
        <div className="px-6 py-6 border rounded-xl space-y-6 bg-white">
          {/* TODO: 右側の内容を追加 */}
          <h1 className="text-xl font-bold">AIに支持を出すうえで大事なこと</h1>
        </div>
      </div>
    </div>
  );
}
