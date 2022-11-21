import React from "react";

const OfferCardInfoPart = ({ onNavigationCallback, offerInformation }) => {
  const { location, price, carSpecs, name } = offerInformation;

  return (
    <div
      onClick={onNavigationCallback}
      className={`flex w-full flex-col gap-y-1 overflow-hidden rounded-xl py-3 dark:border-solid dark:border-dmGrey800/50 dark:bg-dmGrey900 dark:shadow-sm 500:absolute 500:bottom-[2%] 500:z-10 500:w-11/12 500:gap-y-0 500:bg-white 500:p-3 500:shadow-md dark:500:border 1400:bottom-[6%] 1400:gap-y-1`}
    >
      {/* name and location */}
      <div className="flex flex-col gap-y-1">
        {/* location */}
        <div className="flex w-5/6 items-center gap-x-1 text-xs text-lmGrey600 dark:text-dmGrey100 500:w-fit 1400:text-base">
          <i className="fa-solid fa-location-dot"></i>
          <span className="w-full truncate">{location.formatted}</span>
        </div>
        {/* name */}
        <span className="w-5/6 truncate text-base font-semibold text-lmGrey700 dark:text-dmGrey25 500:w-fit 1400:text-xl">
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
        <div className="hidden items-center justify-center px-1">
          <div className="h-1 w-1 rounded-full bg-lmGrey400"></div>
        </div>
        <span className="hidden text-lg text-lmPrimary dark:text-dmPrimary">
          {price.month}€{" "}
          <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
            /month
          </span>
        </span>
      </div>

      {/* sum more info */}
      <div className="flex w-5/6 gap-x-4 500:hidden 500:w-fit 1400:flex">
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

export default OfferCardInfoPart;
