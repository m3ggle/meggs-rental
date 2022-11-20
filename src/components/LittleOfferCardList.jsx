import React from 'react'
import ExampleData from '../ExampleData';
import Btn from './Btn';
import LittleOfferCard from './LittleOfferCard';

const LittleOfferCardList = () => {
    const anArray = [0, 1, 3];
    const { offerCard } = ExampleData();

  
    return (
      <div className="flex flex-col gap-y-2">
        {anArray.map((item) => (
          <LittleOfferCard
            key={item}
            name={offerCard.name}
            location={offerCard.location}
            price={offerCard.priceMonth}
            transmission={offerCard.transmission}
            seats={offerCard.seats}
          />
        ))}
        <Btn
          type="button"
          uiType="secondary"
          title="Load More"
        />
      </div>
    );
}

export default LittleOfferCardList