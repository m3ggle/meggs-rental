import React from 'react'
import ExampleData from '../ExampleData';
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
      <div type='button' className="flex w-full items-center justify-center rounded-lg bg-primary100 px-3 py-2 text-sm font-semibold text-lmPrimary">
        Load More
      </div>
    </div>
  );
}

export default LittleOfferCardList