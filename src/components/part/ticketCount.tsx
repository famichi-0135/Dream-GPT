"use client";

import { getTicketCount } from "@/lib/query";
import clsx from "clsx";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { refreshAtom } from "./createGoal";

export function TicketCount() {
  const [ticket, setTicket] = useState();
  const [refresh] = useAtom(refreshAtom);
  useEffect(() => {
    const getTicket = async () => {
      const ticketData = await getTicketCount();
      if (ticketData.success === false) {
        toast.error("残チケット枚数の取得に失敗しました。");
      } else {
        setTicket(ticketData.ticket);
      }
    };
    getTicket();
  }, [refresh]);

  return (
    <div className="my-1.5 flex-col items-center py-4 px-6 border-1 border-gray-300 transition rounded-2xl space-y-2 mt-6">
      <p className="text-sm">残チケット数</p>
      <p
        className={clsx("text-lg font-bold text-indigo-700", {
          "text-red-700": ticket === 0,
        })}
      >
        {ticket === (1 || 0) ? `${ticket} Ticket` : `${ticket} Tickets`}
      </p>
    </div>
  );
}
