import React from 'react'
import ExampleData from '../../ExampleData';
import Btn from '../Btn';
import MobileCatalogOfferCard from '../catalog/mobileCatalog/MobileCatalogOfferCard/MobileCatalogOfferCard';

const LittleOfferCardList = () => {
    const anArray = [0, 1, 3];
    const { offerCard } = ExampleData();

  
    return (
      <div className="flex flex-col gap-y-2">
        {anArray.map((item, index) => (
          <MobileCatalogOfferCard
            key={item}
            index={index}
            offerInformation={offerCard}
          />
        ))}
        <Btn type="button" uiType="secondary" title="Load More" />
      </div>
    );
}

export default LittleOfferCardList