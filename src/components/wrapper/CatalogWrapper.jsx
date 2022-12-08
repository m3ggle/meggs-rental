import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFilterBySearchParams } from "../../hooks/FilterBySearchParams/useFilterBySearchParams";
import CatalogList from "../../pages/explore/catalog/components/CatalogList";
import CatalogLayout from "../layouts/CatalogLayout";

const CatalogWrapper = ({ offerList }) => {
  const [filteredOffers, setFilteredOffers] = useState(offerList);
  let [searchParams] = useSearchParams();
  const { filterBySearchParams } = useFilterBySearchParams();

  // Todo: React.Callback for "filterBySearchParams", after that, add to depArray
  useEffect(() => {
    offerList && setFilteredOffers(filterBySearchParams(offerList));
  }, [searchParams, offerList, setFilteredOffers]);

  return (
    <CatalogLayout>
      <CatalogList offerList={filteredOffers} />
    </CatalogLayout>
  );
};

export default CatalogWrapper;
