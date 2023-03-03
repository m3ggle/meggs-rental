import React from "react";
import CatalogList from "../../pages/explore/catalog/components/CatalogList";
import CatalogLayout from "../layouts/CatalogLayout";

const CatalogWrapper = ({ offerList }) => {
  return (
    <CatalogLayout>
      <CatalogList offerList={offerList} />
    </CatalogLayout>
  );
};

export default CatalogWrapper;
