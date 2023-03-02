// https://youtu.be/9ySmMd5Cjc0
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  parse,
  startOfToday,
  startOfWeek,
} from "date-fns";
import { useState } from "react";
import Calendar from "./Calendar";

const CalendarWrapper = ({
  shadowUI,
  header = false,
  start_date,
  end_date,
}) => {
  let today = startOfToday();
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy")); // Nov-2022
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  // all days of the current month in an array
  let days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 }); // first day of prev month
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 }); // first day of next month
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  return (
    <div
      className={`h-fit w-full overflow-hidden rounded-2xl bg-white p-6 ${
        shadowUI && "shadow"
      } dark:bg-dmGrey900 dark:shadow-dmShadow `}
    >
      <div className="flex flex-col gap-y-4">
        {/* calendar header */}
        {header && (
          <div className="flex items-center">
            <h2 className="flex-auto font-semibold dark:text-dmGrey100">
              {format(firstDayCurrentMonth, "MMMM yyyy")}
            </h2>
            <button
              type="button"
              onClick={previousMonth}
              className="flex h-10 w-10 items-center justify-center text-lmGrey300 duration-300 hover:text-lmGrey600 dark:text-dmGrey300 dark:hover:text-dmGrey100"
            >
              <span className="sr-only">Previous month</span>
              <div
                className="fa-solid fa-chevron-left text-[16px]"
                aria-hidden="true"
              ></div>
            </button>
            <button
              onClick={nextMonth}
              type="button"
              className="-mr-1.6 flex h-10 w-10 items-center justify-center text-lmGrey300 duration-300 hover:text-lmGrey600 dark:text-dmGrey300 dark:hover:text-dmGrey100"
            >
              <span className="sr-only">Next month</span>
              <div
                className="fa-solid fa-chevron-right text-[16px]"
                aria-hidden="true"
              ></div>
            </button>
          </div>
        )}
        {/* calendar main */}
        <Calendar
          firstDayCurrentMonth={firstDayCurrentMonth}
          days={days}
          startDate={start_date}
          endDate={end_date}
        />
      </div>
    </div>
  );
};

export default CalendarWrapper;
