"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "./part/humbergar";
import { usePathname } from "next/navigation";
import { sidebarType } from "@/lib/type";
import { sidebarItem } from "@/lib/sidebarItem";
import clsx from "clsx";
import { Suspense, useState } from "react";
import { TicketCount } from "./part/ticketCount";
import { Loading } from "./part/loading";
import Link from "next/link";

export function RepSideBar() {
  // const [open, setOpen] = useState<boolean>(false)
  const path = usePathname();
  const items: sidebarType[] = sidebarItem;
  console.log(items);
  return (
    <Sheet>
      {/* <SheetTrigger asChild onClick={() => setOpen(true)}> */}
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      {/* <SheetContent className="w-[50%]" onClick={() => setOpen(false)}> */}
      <SheetContent className="w-[50%]">
        <SheetHeader>
          <SheetTitle>メニュー</SheetTitle>
        </SheetHeader>
        <div className="grid flex-1 mt-8">
          <div className="grid gap-3 auto-rows-min gap-6 px-2">
            {items.map((item) => (
              <div className="text-xl font-bold  mx-2" key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    "grid gap-3 py-4 px-4 hover:bg-gray-200 transition rounded-xl",
                    {
                      "bg-indigo-100 transition rounded-2xl":
                        path === item.href,
                    }
                  )}
                >
                  <div className="flex space-x-2">
                    <item.icon />
                    <div className="">{item.title}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <SheetFooter>
          <Suspense fallback={<Loading />}>
            <TicketCount />
          </Suspense>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
