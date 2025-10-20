"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { deleteAllUserData } from "@/lib/query";
import { DialogClose } from "@radix-ui/react-dialog";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function DeleteDataButton() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleButton = async () => {
    const res = await deleteAllUserData();
    if (res.success === true) {
      toast.success("データのリセットに成功しました。");
      redirect("./todo");
    } else if (res.success === false) {
      toast.error("データのリセットに失敗しました。");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">消去</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <p className="text-red-600">本当に削除してよろしいですか？</p>
          </DialogTitle>
          <DialogDescription>
            一度削除したデータを復旧することはできません。
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild={true}>
            <Button variant="outline">閉じる</Button>
          </DialogClose>
          <Button onClick={() => handleButton()} variant="destructive">
            データを削除する
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
