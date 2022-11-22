import React from "react";
import CatalogWrapper from "../../components/wrapper/CatalogWrapper";
import ExampleData from "../../ExampleData";

const UserOffers = () => {
  const { exampleOffers } = ExampleData();
  const filteredOffers = exampleOffers.filter(
    (offer) => offer.ownerId === "ae5cdceb-1e5b-4b84-9bab-bab3d55a1abb"
  );
  return <CatalogWrapper offerList={filteredOffers} />;
};

export default UserOffers;
