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
import { deleteUserAcount } from "@/lib/query";
import { DialogClose } from "@radix-ui/react-dialog";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function DeleteAcountDialog() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleDeleteAcount = async () => {
    const res = await deleteUserAcount();
    if (res.success === true) {
      toast.success("アカウントの削除に成功しました。");
      redirect(".");
    } else if (res.success === false) {
      toast.error("アカウントの削除に失敗しました。");
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
            一度削除したユーザー情報を復旧することはできません。
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild={true}>
            <Button variant="outline">閉じる</Button>
          </DialogClose>
          <Button onClick={() => handleDeleteAcount()} variant="destructive">
            アカウントデータを削除する
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
