import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useUserContext } from "../../../../context/user/userContext";
import { placeNameToObject } from "../../../../helpers/placeNameToObject";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";

export const useHandleCatalogFilter = () => {
  const { getAllParams } = useUrlManipulation();
  const { userId, preferredCity } = useUserContext();
  const locationPath = useLocation()

  const formatString = (str = "") => {
    let formattedStr = str.replace(/([A-Z])/g, "_$1").toLowerCase();
    return formattedStr.replace(/^_+|_+$/g, "");
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

    if (userId !== null) {
      filter["user_id"] = userId;
    }

    if (
      filter.city === undefined &&
      userId !== null &&
      locationPath !== "/favorites"
    ) {
      // user is logged in, use preferred city
      filter["city"] = preferredCity.text.city;
      filter["province"] = preferredCity.text.province;
      filter["country"] = preferredCity.text.country;
    }

    return filter;
  }, [getAllParams, userId, preferredCity]);

  return { handleCatalogFilter };
};
