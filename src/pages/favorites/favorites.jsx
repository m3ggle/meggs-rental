import React from "react";
import CatalogWrapper from "../../components/wrapper/CatalogWrapper";
import PageAuthChecker from "../../components/wrapper/PageAuthChecker";
import ExampleData from "../../ExampleData";

const Favorites = () => {
  const { exampleOffers } = ExampleData();
  const filteredOffers = exampleOffers.filter((offer) => offer.liked);
  return (
  <PageAuthChecker>
    <CatalogWrapper offerList={filteredOffers} />
  </PageAuthChecker>
  )
};

export default Favorites;
