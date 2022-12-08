import React from "react";
import MobileOfferCard from "../../../../../components/offerCard/nonResponsive/mobileOfferCard/MobileOfferCard";

const MobileCatalogList = ({ offerList }) => {
  return (
    <>
      {offerList.map((offer, index) => (
        <MobileOfferCard
          key={offer.offerId}
          offerInformation={offer}
          index={index}
        />
      ))}
    </>
  );
};

export default MobileCatalogList;
