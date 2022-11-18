import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CatalogList from "./CatalogList";
import LayoutCatalog from "./LayoutCatalog";

const CatalogLikeView = ({offerList}) => {
  const [filteredOffers, setFilteredOffers] = useState(offerList)
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let tempFilteredOffers = []
  }, [searchParams]);

  const getAllParams = () => {
    for (const [key, value] of searchParams.entries()) {
      console.log(`${key}: ${value}`);
    }
  }

  return (
    <LayoutCatalog>
      <CatalogList offerList={offerList} />
    </LayoutCatalog>
  );
};

export default CatalogLikeView;
