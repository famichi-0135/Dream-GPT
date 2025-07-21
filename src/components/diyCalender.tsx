import { getDay, getMonth } from "date-fns";

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
    <div>
      <h1>{lastday}</h1>
      <h1>{day}</h1>
      <h1>{data.getMonth() + 1}月</h1>
      <h1>{data.toLocaleDateString()}</h1>
      <h1>先月の最終日は{lastMonthDate}日</h1>
      <h1>今月の最終日は{nowMonthDate}日</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>日</th>
              <th>月</th>
              <th>火</th>
              <th>水</th>
              <th>木</th>
              <th>金</th>
              <th>土</th>
            </tr>
          </thead>
          <tbody>
            {calender.map((week, weekIdx) => (
              <tr key={weekIdx}>
                {week.map((days: number) => (
                  <td key={days} className="">
                    {days}
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
