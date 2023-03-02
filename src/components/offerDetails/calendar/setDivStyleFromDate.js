import { isSameDay, isSameMonth, isWithinInterval } from "date-fns";

const today = new Date();

export const setDivStyleFromDate = ({
  day,
  startDate,
  endDate,
  firstDayCurrentMonth,
}) => {
  let properties =
    "mx-auto flex h-8 w-8 items-center justify-center rounded-full duration-300 ";

  // today
  if (isSameDay(day, today)) {
    properties += "bg-gradient-to-r from-[#0180FE] to-[#2591FE] text-white";
    return properties;
  }

  if (isSameDay(day, startDate) || isSameDay(day, endDate)) {
    properties += "text-white bg-lmGrey800 dark:bg-dmGrey800";
    return properties;
  }

  // inside current month
  if (isSameMonth(day, firstDayCurrentMonth)) {
    properties += "text-lmGrey600 dark:text-dmGrey100";
    if (
      isWithinInterval(day, {
        start: startDate,
        end: endDate,
      })
    ) {
      properties += " bg-lmGrey50 dark:bg-dmGrey800";
    }
    return properties;
  }

  // outside current month
  properties += "text-lmGrey300 dark:text-dmGrey600";
  if (
    isWithinInterval(day, {
      start: startDate,
      end: endDate,
    })
  ) {
    properties += " bg-lmGrey25 dark:bg-dmGrey800";
  }

  return properties;
};
