import React from "react";
import MobileCatalogOfferCard from "./MobileCatalogOfferCard/MobileCatalogOfferCard";

const MobileCatalogList = ({ offerList }) => {
  return (
    <>
      {offerList.map((offer, index) => (
        <MobileCatalogOfferCard
          key={offer.offerId}
          offerInformation={offer}
          index={index}
        />
      ))}
    </>
  );
};

export default MobileCatalogList;
