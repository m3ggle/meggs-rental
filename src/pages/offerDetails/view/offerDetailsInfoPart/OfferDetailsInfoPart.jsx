import React from "react";
import OfferDetailsBasicInfo from "./OfferDetailsBasicInfo";
import OfferDetailsCalLoc from "./OfferDetailsCalLoc";
import OfferDetailsCarSpecs from "./OfferDetailsCarSpecs";
import OfferDetailsOwner from "./OfferDetailsOwner";
import OfferDetailsReviews from "./OfferDetailsReviews";

const OfferDetailsInfoPart = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-[440px] flex-col gap-y-6 p-6 700:w-[720px] 1200:w-[480px] 1400:w-full">
        <OfferDetailsBasicInfo />
        <OfferDetailsCalLoc />
        <OfferDetailsCarSpecs />
        <OfferDetailsOwner />
        <OfferDetailsReviews />
      </div>
    </div>
  );
};

export default OfferDetailsInfoPart;
