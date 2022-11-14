import React from "react";
import CatalogList from "./view/CatalogList";
import LayoutCatalog from "./view/LayoutCatalog";

const Catalog = () => {
  return (
    <LayoutCatalog>
      <CatalogList />
    </LayoutCatalog>
  );
};

export default Catalog;
