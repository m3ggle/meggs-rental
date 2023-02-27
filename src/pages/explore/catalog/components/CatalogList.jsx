import React from "react";
import OfferCard from "../../../../components/offerCard/responsive/offerCard/OfferCard";

const CatalogList = ({ offerList }) => {
  return (
    <>
      {offerList.map((offer, index) => (
        <OfferCard key={offer.id} offerInformation={offer} index={index} />
      ))}
    </>
  );
};

export default CatalogList;
