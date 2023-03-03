import { format } from "date-fns";
import React from "react";
import { setDivStyleFromDate } from "./setDivStyleFromDate";

const Calendar = ({ firstDayCurrentMonth, days, startDate, endDate }) => {
  if (startDate === null) {
    startDate = new Date(new Date().getFullYear(), 1, 1);
  } else {
    startDate = new Date(startDate);
  }
  if (endDate === null) {
    endDate = new Date(new Date().getFullYear(), 11, 31);
  } else {
    endDate = new Date(endDate);
  }

  return (
    <div className="flex flex-col gap-y-2 cursor-default">
      {/* weeks */}
      <div className="grid grid-cols-7 text-center text-xs leading-6 text-lmGrey400 dark:text-dmGrey300">
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>
      {/* days */}
      <div className="grid grid-cols-7 gap-y-1 text-sm">
        {days.map((day) => (
          <div key={day.toString()}>
            <div
              className={setDivStyleFromDate({
                day,
                startDate,
                endDate,
                firstDayCurrentMonth,
              })}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
