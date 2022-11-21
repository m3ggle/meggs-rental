import React from "react";
import OfferDetailsImgPart from "./view/OfferDetailsImgPart";
import OfferDetailsInfoPart from "./view/offerDetailsInfoPart/OfferDetailsInfoPart";

const OfferDetails = () => {
  return (
    <div className="relative flex w-full max-w-[1440px] flex-col pt-6 1200:flex-row 1200:pt-0">
      <OfferDetailsImgPart />
      <OfferDetailsInfoPart />
    </div>
  );
};

export default OfferDetails;
