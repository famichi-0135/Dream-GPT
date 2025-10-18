import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { atom, useAtom } from "jotai";
// import { useState } from "react";

const isEditStateH = {
  isEdit: false,
  uniqueId: "",
};
export const isEditState = atom<{ isEdit: boolean; uniqueId: string }>(
  isEditStateH
);
export function PopOver({
  uniqueId,
  title,
  deadline,
}: {
  uniqueId: string;
  title: string;
  deadline: string;
}) {
  const [editState, setEditState] = useAtom(isEditState);
  const handleEdit = () => {
    setEditState({ isEdit: true, uniqueId });
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          onClick={(e) => console.log("hoge")}
          className="text-gray-400 hover:text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-30">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Button
              variant="ghost"
              className="text-md text-gray-700"
              onClick={() => handleEdit()}
            >
              編集
            </Button>
            <Button
              variant="ghost"
              className="text-md text-red-800 hover:text-red-700"
            >
              削除
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
