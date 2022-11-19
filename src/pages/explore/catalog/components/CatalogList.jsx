import React from "react";
import OfferCard from "../../../../components/catalog/OfferCard";

const CatalogList = ({ offerList }) => {
  return (
    <>
      {offerList.map((offer, index) => (
        <OfferCard key={offer.offerId} offerInformation={offer} index={index} />
      ))}
    </>
  );
};

export default CatalogList;
