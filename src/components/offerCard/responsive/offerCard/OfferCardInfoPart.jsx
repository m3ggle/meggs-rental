import React from "react";

const OfferCardInfoPart = ({ onNavigationCallback, offerInformation }) => {
  const { location, price, carSpecs, name } = offerInformation;

  return (
    <div
      onClick={onNavigationCallback}
      className={`flex w-full  flex-col gap-y-1 rounded-xl py-3 dark:bg-dmGrey900 dark:shadow-sm dark:shadow-dmShadow 500:absolute 500:bottom-[2%] 500:z-10 500:w-11/12 500:gap-y-0 500:bg-white 500:p-3 500:shadow 1400:bottom-[6%] 1400:gap-y-1`}
    >
      <div className="flex w-full flex-col overflow-hidden">
        <div className="flex w-10/12 items-center gap-x-1 text-sm text-lmGrey600 dark:text-dmGrey100 400:w-10/12 500:w-full 1400:text-base">
          <i className="fa-solid fa-location-dot"></i>
          <span className="w-full truncate">{location.formatted}</span>
        </div>
        <span className="w-8/12 truncate text-lg font-semibold text-lmGrey700 dark:text-dmGrey25 400:w-9/12 500:w-full 1400:text-xl">
          {name}
        </span>
      </div>

      {/* price */}
      <div className="flex w-full items-center gap-x-[2px] truncate">
        <span className="text-base text-lmPrimary dark:text-dmPrimary 1400:text-lg">
          {price.day}€{" "}
          <span className="text-xs 1400:text-sm text-lmGrey400 dark:text-dmGrey300">
            /day
          </span>
        </span>
        <div className="flex items-center justify-center px-1 500:hidden 1400:flex">
          <div className="h-1 w-1 rounded-full bg-lmGrey400"></div>
        </div>
        <span className="flex items-center truncate text-base text-lmPrimary dark:text-dmPrimary 1400:text-lg">
          {price.week}€{" "}
          <span className="truncate text-xs 1400:text-sm text-lmGrey400 dark:text-dmGrey300">
            /week
          </span>
        </span>
        <div className="hidden items-center justify-center px-1">
          <div className="h-1 w-1 rounded-full bg-lmGrey400"></div>
        </div>
        <span className="hidden items-center text-lg text-lmPrimary dark:text-dmPrimary 1400:flex">
          {price.month}€{" "}
          <span className="truncate text-xs 1400:text-sm text-lmGrey400 dark:text-dmGrey300">
            /month
          </span>
        </span>
      </div>

      {/* sum more info */}
      <div className="flex w-5/6 gap-x-4 500:hidden 500:w-fit 1400:flex">
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

export default OfferCardInfoPart;
