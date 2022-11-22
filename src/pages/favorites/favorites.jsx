import React from "react";
import CatalogWrapper from "../../components/wrapper/CatalogWrapper";
import ExampleData from "../../ExampleData";

const Favorites = () => {
  const { exampleOffers } = ExampleData();
  const filteredOffers = exampleOffers.filter((offer) => offer.liked);
  return <CatalogWrapper offerList={filteredOffers} />;
};

export default Favorites;
