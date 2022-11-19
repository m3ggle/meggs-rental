import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFilterBySearchParams } from "../hooks/FilterBySearchParams/useFilterBySearchParams";
import CatalogList from "./CatalogList";
import LayoutCatalog from "./LayoutCatalog";

const CatalogLikeView = ({ offerList }) => {
  const [filteredOffers, setFilteredOffers] = useState(offerList);
  let [searchParams] = useSearchParams();
  const { filterBySearchParams } = useFilterBySearchParams();

  // Todo: React.Callback for "filterBySearchParams", after that, add to depArray
  useEffect(() => {
    offerList && setFilteredOffers(filterBySearchParams(offerList));
  }, [searchParams, offerList, setFilteredOffers]);

  return (
    <LayoutCatalog>
      <CatalogList offerList={filteredOffers} />
    </LayoutCatalog>
  );
};

export default CatalogLikeView;
