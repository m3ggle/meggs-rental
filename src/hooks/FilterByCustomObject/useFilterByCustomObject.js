import { filterByCarSpec } from "../FilterBySearchParams/helper/filterByCarSpec";
import { filterByDate } from "../FilterBySearchParams/helper/filterByDate";
import { filterByEndPrice } from "../FilterBySearchParams/helper/filterByEndPrice";
import { filterBySearch } from "../FilterBySearchParams/helper/filterBySearch";
import { filterByStartPrice } from "../FilterBySearchParams/helper/filterByStartPrice";

export const useFilterByCustomObject = () => {
  const filterByCustomObject = ({ offerList, object }) => {
    let tempFiltered = offerList;

    for (const [key, value] of Object.entries(object)) {
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

  return { filterByCustomObject };
};
