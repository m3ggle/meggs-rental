import { useGetAllParams } from "../useGetAllParams";
import { filterByCarSpec } from "./helper/filterByCarSpec";
import { filterByDate } from "./helper/filterByDate";
import { filterByEndPrice } from "./helper/filterByEndPrice";
import { filterBySearch } from "./helper/filterBySearch";
import { filterByStartPrice } from "./helper/filterByStartPrice";

export const useFilterBySearchParams = () => {
  const { getAllParams } = useGetAllParams();

  const filterBySearchParams = (offerList) => {
    let tempFiltered = offerList;

    for (const [key, value] of Object.entries(getAllParams())) {
      switch (key) {
        case "search":
          tempFiltered = filterBySearch(tempFiltered, value);
          break;
        case "startDate":
          tempFiltered = filterByDate(tempFiltered, value);
          break;
        case "endDate":
          tempFiltered = filterByDate(tempFiltered, value);
          break;
        case "startPriceDay":
          tempFiltered = filterByStartPrice(tempFiltered, value, "day");
          break;
        case "endPriceDay":
          tempFiltered = filterByEndPrice(tempFiltered, value, "day");
          break;
        case "startPriceWeek":
          tempFiltered = filterByStartPrice(tempFiltered, value, "week");
          break;
        case "endPriceWeek":
          tempFiltered = filterByEndPrice(tempFiltered, value, "week");
          break;
        case "startPriceMonth":
          tempFiltered = filterByStartPrice(tempFiltered, value, "month");
          break;
        case "endPriceMonth":
          tempFiltered = filterByEndPrice(tempFiltered, value, "month");
          break;
        case "transmission":
          tempFiltered = filterByCarSpec(tempFiltered, value, key);
          break;
        case "fuelType":
          tempFiltered = filterByCarSpec(tempFiltered, value, key);
          break;
        case "seats":
          tempFiltered = filterByCarSpec(tempFiltered, value, key);
          break;
        case "trunkVolume":
          tempFiltered = filterByCarSpec(tempFiltered, value, key);
          break;
        case "color":
          tempFiltered = filterByCarSpec(tempFiltered, value, key);
          break;
        case "smoking":
          tempFiltered = filterByCarSpec(tempFiltered, value, key);
          break;
        case "eating":
          tempFiltered = filterByCarSpec(tempFiltered, value, key);
          break;
        default:
          break;
      }
    }
    return tempFiltered;
  };

  return { filterBySearchParams };
};
