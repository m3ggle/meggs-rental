import React from "react";
import CatalogLikeView from "./view/CatalogLikeView";
import ExampleData from "../../ExampleData"

const Catalog = () => {
  const { exampleOffers } = ExampleData();
  return <CatalogLikeView offerList={exampleOffers} />;
};

export default Catalog;
