import React from "react";
import OfferCard from "../../components/catalog/offerCard/OfferCard";
import ExampleData from "../../ExampleData";

const {exampleOffers} = ExampleData()

const PrivacyPolicy = () => {
  const singleOffer = exampleOffers[0]

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <OfferCard offerInformation={singleOffer} index={0} />
    </div>
  );
};

export default PrivacyPolicy;
