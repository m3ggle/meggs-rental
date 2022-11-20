import React from "react";
import OfferCard from "../../../../components/catalog/offerCard/OfferCard";

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
