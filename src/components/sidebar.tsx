"use client";

import Link from "next/link";
import { sidebarType } from "@/lib/type";
import { sidebarItem } from "@/lib/sidebarItem";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function Sidebar() {
  const path = usePathname();
  const items: sidebarType[] = sidebarItem;
  return (
    <div className="flex justify-center">
      <div className="py-8 ">
        {items.map((item) => (
          <div className="text-xl font-bold my-1.5" key={item.href}>
            <Link
              href={item.href}
              className={clsx(
                "flex items-center py-4 px-6 hover:bg-gray-200 transition rounded-2xl",
                {
                  "bg-indigo-100 transition rounded-2xl": path === item.href,
                }
              )}
            >
              <item.icon />
              <div className="ml-2">{item.title}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
