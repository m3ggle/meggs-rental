import React from 'react'

const SpecialHomepageOfferCardInfoPart = ({
  onNavigationCallback,
  offerInformation,
}) => {
  const { location, price, carSpecs, name } = offerInformation;

  return (
    <div
      onClick={onNavigationCallback}
      className={`absolute bottom-[3%] z-10 flex w-11/12 flex-col gap-y-1 rounded-xl bg-white p-3 py-3 shadow dark:bg-dmGrey900 dark:shadow-sm dark:shadow-dmShadow`}
    >
      <div className="flex w-full flex-col gap-y-1 overflow-hidden">
        <div className="flex w-full items-center gap-x-1 text-base text-lmGrey600 dark:text-dmGrey100">
          <i className="fa-solid fa-location-dot"></i>
          <span className="w-full truncate">{location.formatted}</span>
        </div>
        <span className="w-full truncate text-xl font-semibold text-lmGrey700 dark:text-dmGrey25">
          {name}
        </span>
      </div>

      {/* price */}
      <div className="flex w-full items-center gap-x-[2px] truncate">
        <span className="text-lg text-lmPrimary dark:text-dmPrimary">
          {price.day}€{" "}
          <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
            /day
          </span>
        </span>
        <div className="flex items-center justify-center px-1">
          <div className="h-1 w-1 rounded-full bg-lmGrey400"></div>
        </div>
        <span className="flex items-center truncate text-lg text-lmPrimary dark:text-dmPrimary">
          {price.week}€{" "}
          <span className="truncate text-sm text-lmGrey400 dark:text-dmGrey300">
            /week
          </span>
        </span>
        <div className="hidden items-center justify-center px-1">
          <div className="h-1 w-1 rounded-full bg-lmGrey400"></div>
        </div>
        <span className=" flex items-center text-lg text-lmPrimary dark:text-dmPrimary">
          {price.month}€{" "}
          <span className="truncate text-sm text-lmGrey400 dark:text-dmGrey300">
            /month
          </span>
        </span>
      </div>

      {/* sum more info */}
      <div className="hidden w-5/6 gap-x-4">
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

export default SpecialHomepageOfferCardInfoPart