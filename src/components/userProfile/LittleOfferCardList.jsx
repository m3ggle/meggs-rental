import React, { useState } from "react";
import ExampleData from "../../ExampleData";
import MobileCatalogOfferCard from "../catalog/mobileCatalog/MobileCatalogOfferCard/MobileCatalogOfferCard";
import Btn from "../common/Btn";

const LittleOfferCardList = ({ closeModal }) => {
  const [amountOfOfferCards, setAmountOfOfferCards] = useState([1,2,3])
  const { exampleOffers } = ExampleData();

  const handleLoadMore = () => {
    let currentAmount = amountOfOfferCards
    for (let i = 0; i < 3; i++) {
      currentAmount.push(2)
    }
    setAmountOfOfferCards([...currentAmount]);
  }

  return (
    <div className="flex flex-col gap-y-2">
      {amountOfOfferCards.map((item, index) => (
        <MobileCatalogOfferCard
          closeModal={closeModal}
          key={index}
          index={index}
          offerInformation={exampleOffers[index]}
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
