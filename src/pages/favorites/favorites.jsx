import React from "react";
import ExampleData from "../../ExampleData";
import CatalogLikeView from "../explore/catalog/components/CatalogLikeView";

const Favorites = () => {
  const { exampleOffers } = ExampleData();
  const filteredOffers = exampleOffers.filter((offer) => offer.liked);
  return <CatalogLikeView offerList={filteredOffers} />;
};

export default Favorites;
