import React from 'react'
import CarSpecWrapper from '../../../../components/offerDetails/CarSpecWrapper';
import ExampleData from '../../../../ExampleData';

const { carSpecData, userProfileBig } = ExampleData();

const OfferDetailsCarSpecs = () => {
  return (
    <div className="flex w-full max-w-[652px] flex-col">
      <span className="text-lg text-lmGrey600 dark:text-dmGrey100">
        Car Specification
      </span>
      {/* <div
              className={`flex h-full w-full flex-col gap-y-1 items-center rounded-3xl bg-white p-6 shadow-md ${style.darkModeBorder} dark:bg-dmGrey900`}
            >
              <CarSpecWrapper amount="all" specs={carSpecData} mobile={false} />
            </div> */}
      <CarSpecWrapper amount="all" specs={carSpecData} mobile={false} />
    </div>
  );
}

export default OfferDetailsCarSpecs