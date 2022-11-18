import { isWithinInterval } from "date-fns";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { createDate } from "../helper/createDate";
import { useGetAllParams } from "../hooks/useGetAllParams";
import CatalogList from "./CatalogList";
import LayoutCatalog from "./LayoutCatalog";

const CatalogLikeView = ({ offerList }) => {
  const [filteredOffers, setFilteredOffers] = useState(offerList);
  let [searchParams, setSearchParams] = useSearchParams();
  const { getAllParams } = useGetAllParams();

  useEffect(() => {
    let tempFilteredOffers = [];
    const filtered = filterBySearchParams(offerList);
    // console.log(offerList);
    // const currentParams = searchParams.get("search");
  }, [searchParams, offerList]);

  const filterBySearchParams = (list) => {
    const allActiveParams = getAllParams();
    let tempFiltered = offerList;
    Object.entries(allActiveParams).map((param) => {
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
        default:
          break;
      }
    });
    setFilteredOffers(tempFiltered);
  };

  return (
    <LayoutCatalog>
      <CatalogList offerList={filteredOffers} />
    </LayoutCatalog>
  );
};

export default CatalogLikeView;
