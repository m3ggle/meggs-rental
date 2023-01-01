import React from "react";
import Btn from "../common/Btn";
import MobileOfferCard from "../offerCard/nonResponsive/mobileOfferCard/MobileOfferCard";

const LittleOfferCardList = ({ offers, closeModal }) => {
  const handleLoadMore = () => {};

  return (
    <div className="flex flex-col gap-y-2">
      {offers.map((offer, index) => (
        <MobileOfferCard
          closeModal={closeModal}
          key={index}
          index={index}
          offerInformation={offer}
        />
      ))}
      <Btn
        type="button"
        uiType="secondary"
        title="Load More"
        onClick={handleLoadMore}
      />
    </div>
  );
};

export default LittleOfferCardList;
