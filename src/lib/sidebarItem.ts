import { Calender } from "@/components/part/calender";
import { Fukidashi } from "@/components/part/fukidashi";
import { Setting } from "@/components/part/setting";
import { Todo } from "@/components/part/todo";
import { sidebarType } from "./type";

export const sidebarItem: sidebarType[] = [
  {
    title: "目標を作る",
    href: "/dashboard",
    icon: Fukidashi,
  },
  {
    title: "Todoリスト",
    href: "/dashboard/todo",
    icon: Todo,
  },
  {
    title: "カレンダー",
    href: "/dashboard/calender",
    icon: Calender,
  },
  {
    title: "ユーザー設定",
    href: "/dashboard/usersetting",
    icon: Setting,
  },
];
