import React from "react";
import CatalogList from "./CatalogList";
import LayoutCatalog from "./LayoutCatalog";

const CatalogLikeView = ({offerList}) => {
  return (
    <LayoutCatalog>
      <CatalogList offerList={offerList} />
    </LayoutCatalog>
  );
};

export default CatalogLikeView;
