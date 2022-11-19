import { isWithinInterval } from "date-fns";
import { createDate } from "../../../helper/createDate";

export const filterByDate = (offerList, desiredValue) =>
  offerList.filter((offer) =>
    isWithinInterval(createDate(desiredValue), {
      start: createDate(offer.calendar.startDate),
      end: createDate(offer.calendar.endDate),
    })
  );
