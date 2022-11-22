import React from "react";
import CarSpecWrapper from "../../../../components/offerDetails/CarSpecWrapper";

const OfferDetailsCarSpecs = ({ offerInformation }) => {
  return (
    <div className="flex w-full max-w-[652px] flex-col">
      <span className="text-lg text-lmGrey600 dark:text-dmGrey100">
        Car Specification
      </span>
      <CarSpecWrapper amount="all" specs={offerInformation.carSpecs} />
    </div>
  );
};

export default OfferDetailsCarSpecs;
