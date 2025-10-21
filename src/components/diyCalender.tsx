"use client";

import { getDay } from "date-fns";
import { Button } from "./ui/button";
import { useState } from "react";

export function DIYCalender() {
  const data = new Date();
  const [month, setMonth] = useState<number>(data.getMonth());
  const [year, setYear] = useState<number>(data.getFullYear());
  console.log(month);
  function handleClick(type: string) {
    if (type === "plus") {
      if (month === 11) {
        setMonth(0);
        setYear(year + 1);
      } else {
        setMonth(month + 1);
      }
    } else if (type === "minus") {
      if (month === 0) {
        setMonth(11);
        setYear(year - 1);
      } else {
        setMonth(month - 1);
      }
    }
  }

  const lastDayPreviousMonth = new Date(year, month, 0);
  // const lastDayLatestMonth = new Date(year, month + 1, 0);
  const lastDay = getDay(lastDayPreviousMonth);
  // const day = getDay(lastDayLatestMonth);
  const lastMonthDate = new Date(year, month, 0).getDate();
  const nowMonthDate = new Date(year, month + 1, 0).getDate();

  const calender = new Array(6);
  let cntDays = 0;
  let cntLastDays = lastDay;
  let push = 0;
  for (let i = 0; i < 6; i++) {
    calender[i] = new Array(7);
    for (let j = 0; j < 7; j++) {
      if (cntLastDays >= -1 && cntDays == 0) {
        calender[i][j] = lastMonthDate - cntLastDays;
        cntLastDays = cntLastDays - 1;
      }
      if (cntDays <= nowMonthDate && cntLastDays < -1) {
        cntDays++;
        calender[i][j] = cntDays;
      }
      if (cntDays > nowMonthDate && cntLastDays < -1) {
        push++;
        calender[i][j] = push;
      }
    }
  }

  return (
    <div className=" m-2">
      <div className="flex border-1 rounded-3xl bg-white shadow-md hover:shadow-lg transition p-8 flex-col items-center justify-center">
        <div className="flex w-full items-center justify-between mb-4">
          <Button
            variant="link"
            onClick={() => handleClick("minus")}
            className="lg:ml-5 md:ml-2"
          >
            前の月
          </Button>
          <div className="flex-col">
            <div className="flex w-full items-center space-x-1 justify-between">
              <p className="text-sm">{year}年</p>
              <h1 className="text-xl font-bold">{month + 1}月</h1>
            </div>
          </div>
          <Button
            variant="link"
            onClick={() => handleClick("plus")}
            className="lg:mr-5 md:mr-2"
          >
            次の月
          </Button>
        </div>

        <table className="lg:w-3xl md:w-md sm:w-md lg:h-3xl md:h-xl sm:h-lg flex-col">
          <thead>
            <tr>
              <th className="pb-4 text-xl text-red-700">日</th>
              <th className="pb-4 text-xl">月</th>
              <th className="pb-4 text-xl">火</th>
              <th className="pb-4 text-xl">水</th>
              <th className="pb-4 text-xl">木</th>
              <th className="pb-4 text-xl">金</th>
              <th className="pb-4 text-xl text-blue-700">土</th>
            </tr>
          </thead>
          <tbody className="">
            {calender.map((week, weekIdx) => (
              <tr key={weekIdx}>
                {week.map((days: number) => (
                  <td key={days}>
                    <div className="flex items-center justify-center h-12 text-xl rounded-xl hover:bg-indigo-100 transition m-1">
                      {days}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
