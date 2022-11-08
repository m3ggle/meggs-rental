// https://youtu.be/9ySmMd5Cjc0
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
} from "date-fns";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Calendar = () => {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today); // selected day
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy")); // Nov-2022
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  // all days of the current month in an array
  let days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  let newDays = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });
  console.log(newDays);

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 }); // first day of prev month
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 }); // first day of next month
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  return (
    <div className="h-fit w-full overflow-hidden rounded-2xl bg-white p-6 shadow dark:border-[1px] dark:border-solid dark:border-dmGrey800 dark:bg-dmGrey900">
      <div className="flex flex-col gap-y-4">
        {/* calendar header */}
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
        {/* calendar main */}
        <div className="flex flex-col gap-y-2">
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
                <button
                  type="button"
                  onClick={() => setSelectedDay(day)}
                  className={classNames(
                    isEqual(day, selectedDay) && "text-white",
                    !isEqual(day, selectedDay) &&
                      isToday(day) &&
                      "text-lmPrimary dark:text-dmPrimary",
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      isSameMonth(day, firstDayCurrentMonth) &&
                      "text-lmGrey600 dark:text-dmGrey100",
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      !isSameMonth(day, firstDayCurrentMonth) &&
                      "text-lmGrey300 dark:text-dmGrey600",
                    isEqual(day, selectedDay) &&
                      isToday(day) &&
                      "bg-lmPrimary dark:bg-dmPrimary",
                    isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      "bg-lmGrey600 dark:bg-dmGrey600",
                    !isEqual(day, selectedDay) &&
                      "hover:bg-lmGrey100 dark:hover:bg-dmGrey800",
                    (isEqual(day, selectedDay) || isToday(day)) &&
                      "font-semibold",
                    "mx-auto flex h-8 w-8 items-center justify-center rounded-full duration-300"
                  )}
                >
                  <time dateTime={format(day, "yyyy-MM-dd")}>
                    {format(day, "d")}
                  </time>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
