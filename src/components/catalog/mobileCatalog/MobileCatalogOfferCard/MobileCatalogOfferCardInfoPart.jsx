import React from 'react'

const MobileCatalogOfferCardInfoPart = ({onNavigationCallback, offerInformation }) => {
  const { location, name, price, carSpecs } = offerInformation;
  
  return (
    <div
      // onClick={onNavigationCallback}
      className="flex w-full flex-col gap-y-1 overflow-hidden rounded-xl py-3 dark:bg-dmGrey900"
    >
      {/* name and location */}
      <div className="flex flex-col gap-y-1">
        {/* location */}
        <div className="flex w-5/6 items-center gap-x-1 text-xs text-lmGrey600 dark:text-dmGrey100 500:w-fit">
          <i className="fa-solid fa-location-dot"></i>
          <span>{location.formatted}</span>
        </div>
        {/* name */}
        <span className="w-5/6 text-base font-semibold text-lmGrey700 dark:text-dmGrey25 500:w-fit">
          {name}
        </span>
      </div>
      {/* price */}
      <div className="flex items-center gap-x-[2px] truncate">
        <span className="text-lg text-lmPrimary dark:text-dmPrimary">
          {price.day}€{" "}
          <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
            /day
          </span>
        </span>
        <div className="flex items-center justify-center px-1">
          <div className="h-1 w-1 rounded-full bg-lmGrey400"></div>
        </div>
        <span className="text-lg text-lmPrimary dark:text-dmPrimary">
          {price.week}€{" "}
          <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
            /week
          </span>
        </span>
      </div>
      {/* more info */}
      <div className="flex w-5/6 gap-x-4 500:w-fit">
        <div className="flex items-center gap-x-1 text-xs text-lmGrey300 dark:text-dmGrey100">
          <i className="fa-solid fa-gears"></i>
          <span>{carSpecs.transmission}</span>
        </div>
        <div className="flex items-center gap-x-1 text-xs text-lmGrey300 dark:text-dmGrey100">
          <i className="fa-solid fa-chair"></i>
          <span>{carSpecs.seats} Seats</span>
        </div>
      </div>
    </div>
  );
};

export default MobileCatalogOfferCardInfoPart