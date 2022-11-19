import React from "react";
import ExampleData from "../../../ExampleData";
import CatalogLikeView from "./components/CatalogLikeView";

const Catalog = () => {
  const { exampleOffers } = ExampleData();
  return <CatalogLikeView offerList={exampleOffers} />;
};

export default Catalog;
