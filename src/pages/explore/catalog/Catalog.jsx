import React from "react";
import CatalogWrapper from "../../../components/wrapper/CatalogWrapper";
import ExampleData from "../../../ExampleData";

const Catalog = () => {
  const { exampleOffers } = ExampleData();
  return <CatalogWrapper offerList={exampleOffers} />;
};

export default Catalog;
