import React from "react";
import ExampleData from "../../ExampleData";
import CatalogLikeView from "../explore/catalog/components/CatalogLikeView";

const UserOffers = () => {
  const { exampleOffers } = ExampleData();
  const filteredOffers = exampleOffers.filter(
    (offer) => offer.ownerId === "ae5cdceb-1e5b-4b84-9bab-bab3d55a1abb"
  );
  return <CatalogLikeView offerList={filteredOffers} />;
};

export default UserOffers;
