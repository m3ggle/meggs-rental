import React from 'react'

const DesktopOfferCardInfoPart = ({
  onNavigationCallback,
  offerInformation,
}) => {
  const { location, price, carSpecs, name } = offerInformation;

  return (
    <div
      onClick={onNavigationCallback}
      className={`flex flex-col rounded-xl py-3 dark:bg-dmGrey900 dark:shadow-sm dark:shadow-dmShadow absolute z-10 w-11/12 bg-white p-3 shadow bottom-[6%] gap-y-1`}
    >
      <div className="flex w-full flex-col gap-y-1 overflow-hidden">
        <div className="flex items-center gap-x-1 text-lmGrey600 dark:text-dmGrey100 w-full text-base">
          <i className="fa-solid fa-location-dot"></i>
          <span className="w-full truncate">{location.formatted}</span>
        </div>
        <span className="truncate font-semibold text-lmGrey700 dark:text-dmGrey25 w-full text-xl">
          {name}
        </span>
      </div>

      {/* price */}
      <div className="flex w-full items-center gap-x-[2px] truncate">
        <span className="text-lmPrimary dark:text-dmPrimary text-lg">
          {price.day}€{" "}
          <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
            /day
          </span>
        </span>
        <div className="flex items-center justify-center px-1">
          <div className="h-1 w-1 rounded-full bg-lmGrey400"></div>
        </div>
        <span className="flex items-center truncate text-lmPrimary dark:text-dmPrimary text-lg">
          {price.week}€{" "}
          <span className="truncate text-sm text-lmGrey400 dark:text-dmGrey300">
            /week
          </span>
        </span>
        <div className="hidden items-center justify-center px-1">
          <div className="h-1 w-1 rounded-full bg-lmGrey400"></div>
        </div>
        <span className=" items-center text-lg text-lmPrimary dark:text-dmPrimary flex">
          {price.month}€{" "}
          <span className="truncate text-sm text-lmGrey400 dark:text-dmGrey300">
            /month
          </span>
        </span>
      </div>

      {/* sum more info */}
      <div className="flex w-5/6 gap-x-4">
        <div className="flex items-center gap-x-1 text-sm text-lmGrey300 dark:text-dmGrey100">
          <i className="fa-solid fa-gears"></i>
          <span>{carSpecs.transmission}</span>
        </div>
        <div className="flex items-center gap-x-1 text-sm text-lmGrey300 dark:text-dmGrey100">
          <i className="fa-solid fa-chair"></i>
          <span>{carSpecs.seats} Seats</span>
        </div>
      </div>
    </div>
  );
};

export default DesktopOfferCardInfoPart