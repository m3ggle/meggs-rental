import { isWithinInterval } from "date-fns";
import { useGetAllParams } from "../hooks/useGetAllParams";
import { createDate } from "./createDate";

export const useFilterBySearchParams = (list) => {
  const { getAllParams } = useGetAllParams();

  const filterBySearchParams = (list) => {
    let tempFiltered = list;
    Object.entries(getAllParams()).map((param) => {
      switch (param[0]) {
        case "search":
          tempFiltered = tempFiltered.filter((offer) =>
            offer.name.includes(param[1])
          );
          break;
        case "startDate":
          tempFiltered = tempFiltered.filter((offer) =>
            isWithinInterval(createDate(param[1]), {
              start: createDate(offer.calendar.startDate),
              end: createDate(offer.calendar.endDate),
            })
          );
          break;
        case "endDate":
          tempFiltered = tempFiltered.filter((offer) =>
            isWithinInterval(createDate(param[1]), {
              start: createDate(offer.calendar.startDate),
              end: createDate(offer.calendar.endDate),
            })
          );
          break;
        case "startPriceDay":
          tempFiltered = tempFiltered.filter(
            (offer) => param[1] <= offer.price.day
          );
          break;
        case "endPriceDay":
          tempFiltered = tempFiltered.filter(
            (offer) => param[1] >= offer.price.day
          );
          break;
        case "startPriceWeek":
          tempFiltered = tempFiltered.filter(
            (offer) => param[1] <= offer.price.week
          );
          break;
        case "endPriceWeek":
          tempFiltered = tempFiltered.filter(
            (offer) => param[1] >= offer.price.week
          );
          break;
        case "startPriceMonth":
          tempFiltered = tempFiltered.filter(
            (offer) => param[1] <= offer.price.month
          );
          break;
        case "endPriceMonth":
          tempFiltered = tempFiltered.filter(
            (offer) => param[1] >= offer.price.month
          );
          break;
        case "transmission":
          tempFiltered = tempFiltered.filter(
            (offer) => param[1] === offer.carSpecs.transmission
          );
          break;
        case "fuelType":
          tempFiltered = tempFiltered.filter(
            (offer) => param[1] === offer.carSpecs.fuelType
          );
          break;
        case "seats":
          const numberOfSeats = parseInt(param[1].split(" ")[0]);
          tempFiltered = tempFiltered.filter(
            (offer) => numberOfSeats <= offer.carSpecs.seats
          );
          break;
        case "trunkVolume":
          const trunkVol = parseInt(param[1].split(" ")[0]);
          tempFiltered = tempFiltered.filter(
            (offer) => trunkVol <= offer.carSpecs.trunkVolume
          );
          break;
        case "color":
          tempFiltered = tempFiltered.filter(
            (offer) => param[1] === offer.carSpecs.color
          );
          break;
        case "smoking":
          tempFiltered = tempFiltered.filter((offer) =>
            param[1] === offer.carSpecs.smoking ? "Yes" : "No"
          );
          break;
        case "eating":
          tempFiltered = tempFiltered.filter((offer) =>
            param[1] === offer.carSpecs.eating ? "Yes" : "No"
          );
          break;
        default:
          break;
      }
    });

    return tempFiltered;
  };

  return { filterBySearchParams };
};
