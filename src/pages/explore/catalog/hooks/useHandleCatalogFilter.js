import { useCallback } from "react";
import { placeNameToObject } from "../../../../helpers/placeNameToObject";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";

export const useHandleCatalogFilter = () => {
  const { getAllParams } = useUrlManipulation();

  const formatString = (str = "") => {
    // let formattedStr = str.replace(/ /g, "_");
    // formattedStr += "_";
    // return formattedStr;

    // Replace all uppercase letters with "_[lowercase]"
    let formattedStr = str.replace(/([A-Z])/g, "_$1").toLowerCase();
    // Remove any underscores at the beginning or end of the string
    // formattedStr += "_";
    return formattedStr.replace(/^_+|_+$/g, "");
    // return formattedStr
  };

  const handleCatalogFilter = useCallback(() => {
    const allParams = getAllParams();
    let filter = {};

    for (const [key, value] of Object.entries(allParams)) {
      if (key === "city") {
        const { city, province, country } = placeNameToObject(value);
        filter["city"] = city;
        filter["province"] = province;
        filter["country"] = country;
      } else {
        const formattedKey = formatString(key);
        filter[formattedKey] = value;
      }
    }

    return filter;
  }, [getAllParams]);

  return { handleCatalogFilter };
};

/*
write a function which will format a string:
input: string
output: string

examples:
- "offerName" => "offer_name",
- "city" => "city",
- "dayStartPrice" => "day_start_price",
- "dayEndPrice" => "day_end_price",
- "weekStartPrice" => "week_start_price",
- "weekEndPrice" => "week_end_price",
- "monthStartPrice" => "month_start_price",
- "monthEndPrice" => "month_end_price",
- "transmission" => "transmission",
- "trunkVolume" => "trunk_volume",
*/
