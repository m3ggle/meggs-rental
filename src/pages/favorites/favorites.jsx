import React from "react";
import ExampleData from "../../ExampleData";
import CatalogLikeView from "../catalog/view/CatalogLikeView";
import Catalog from "../catalog/view/CatalogLikeView";

const Favorites = () => {
  const { exampleOffers } = ExampleData();
  const filteredOffers = exampleOffers.filter(offer => offer.liked)
   return <CatalogLikeView offerList={filteredOffers} />;
};

export default Favorites;
