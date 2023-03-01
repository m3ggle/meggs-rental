import React from "react";
import OfferDetailsHeader from "../OfferDetailsHeader";
import OfferDetailsBasicInfo from "./OfferDetailsBasicInfo";
import OfferDetailsCalLoc from "./OfferDetailsCalLoc";
import OfferDetailsCarSpecs from "./OfferDetailsCarSpecs";
import OfferDetailsOwner from "./OfferDetailsOwner";
import OfferDetailsReviews from "./OfferDetailsReviews";

const OfferDetailsInfoPart = ({ offerInformation, reviewSection }) => {
  return (
    <div className="flex w-full justify-center">
      <div className="relative flex w-[440px] flex-col gap-y-6 p-6 700:w-[720px] 1200:w-[480px] 1400:w-full">
        <OfferDetailsHeader offerInformation={offerInformation} />
        <OfferDetailsBasicInfo offerInformation={offerInformation} />
        <OfferDetailsCalLoc offerInformation={offerInformation} />
        <OfferDetailsCarSpecs
          vehicle_details={offerInformation.vehicle_details}
        />
        <OfferDetailsOwner offerInformation={offerInformation} />
        <OfferDetailsReviews reviewSection={reviewSection} />
      </div>
    </div>
  );
};

export default OfferDetailsInfoPart;
