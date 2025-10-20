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
import { DialogClose } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";

export function DeleteAcountDialog() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild  >
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
          <Button variant="destructive">アカウントデータを削除する</Button>
        </DialogFooter>

        {/* </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
