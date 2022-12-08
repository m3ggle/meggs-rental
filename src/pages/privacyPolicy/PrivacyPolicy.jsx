import React from "react";
import SpecialHomepageOfferCard from "../../components/offerCard/nonResponsive/specialHomepageOfferCard/SpecialHomepageOfferCard";
import OfferCard from "../../components/offerCard/responsive/offerCard/OfferCard";
import ExampleData from "../../ExampleData";

const { exampleOffers } = ExampleData();

const PrivacyPolicy = () => {
  const singleOffer = exampleOffers[0];

  return (
    <div className="flex h-screen w-full items-center justify-center gap-x-4">
      <SpecialHomepageOfferCard offerInformation={singleOffer} index={0} />
      <OfferCard offerInformation={singleOffer} index={0} />
    </div>
  );
};

export default PrivacyPolicy;
