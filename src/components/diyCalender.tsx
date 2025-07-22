import { getDay, getMonth } from "date-fns";
import { Button } from "./ui/button";

export function DIYCalender() {
  const data = new Date();
  const lastDayPreviousMonth = new Date(data.getFullYear(), data.getMonth(), 0);
  const lastDayLatestMonth = new Date(
    data.getFullYear(),
    data.getMonth() + 1,
    0
  );
  const lastday = getDay(lastDayPreviousMonth);
  const day = getDay(lastDayLatestMonth);
  const lastMonthDate = new Date(
    data.getFullYear(),
    data.getMonth(),
    0
  ).getDate();
  const nowMonthDate = new Date(
    data.getFullYear(),
    data.getMonth() + 1,
    0
  ).getDate();

  const calender = new Array(6);
  let cntDays = 0;
  let cntLastDays = lastday;
  let umeru = 0;
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
        umeru++;
        calender[i][j] = umeru;
      }
    }
  }

  return (
    <div className="mx-4">
      {/* <div className="flex">
        <h1>{lastday}</h1>
        <h1>{day}</h1>
        <h1>{data.getMonth() + 1}月</h1>
        <h1>{data.toLocaleDateString()}</h1>
        <h1>先月の最終日は{lastMonthDate}日</h1>
        <h1>今月の最終日は{nowMonthDate}日</h1>
      </div> */}
      <div className="border-1 rounded-4xl bg-white hover:shadow-md transition p-8">
        <div className="flex justify-between mb-10">
          <Button className="mx-10">次の月</Button>
          <h1 className="text-3xl font-bold">10月</h1>
          <Button className="mx-10">前の月</Button>
        </div>

        <table className=" lg:w-4xl md:w-lg sm:w-sm lg:h-4xl md:h-xl flex-col">
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
                    <div className="flex items-center justify-center h-15 text-xl rounded-xl hover:bg-indigo-100 transition m-1">
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
