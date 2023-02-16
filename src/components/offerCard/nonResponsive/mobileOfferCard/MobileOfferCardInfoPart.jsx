import React from 'react'

const MobileOfferCardInfoPart = ({onNavigationCallback, offerInformation }) => {
  const {
    formatted,
    offer_name,
    day_price,
    week_price,
    transmission,
    amount_seats,
  } = offerInformation;

  return (
    <div
      onClick={onNavigationCallback}
      className="flex w-full flex-col gap-y-1 overflow-hidden rounded-xl py-3 dark:bg-dmGrey900"
    >
      <div className="flex flex-col gap-y-1">
        <div className="flex w-9/12 items-center gap-x-1 text-sm text-lmGrey600 dark:text-dmGrey100">
          <i className="fa-solid fa-location-dot"></i>
          <span className="w-full truncate">{formatted}</span>
        </div>
        <span className="w-9/12 truncate text-base font-semibold text-lmGrey700 dark:text-dmGrey25">
          {offer_name}
        </span>
      </div>

      <div className="flex w-full items-center gap-x-[2px] truncate">
        <span className="text-base text-lmPrimary dark:text-dmPrimary">
          {day_price}€{" "}
          <span className="text-xs text-lmGrey400 dark:text-dmGrey300">
            /day
          </span>
        </span>
        <div className="flex items-center justify-center px-1">
          <div className="min-h-1 min-w-1 rounded-full bg-lmGrey400"></div>
        </div>
        <span className="flex items-center truncate text-base text-lmPrimary dark:text-dmPrimary">
          {week_price}€{" "}
          <span className="truncate text-xs text-lmGrey400 dark:text-dmGrey300">
            /week
          </span>
        </span>
      </div>
      <div className="flex w-5/6 gap-x-4 500:w-fit">
        <div className="flex items-center gap-x-1 text-sm text-lmGrey300 dark:text-dmGrey100">
          <i className="fa-solid fa-gears"></i>
          <span>{transmission}</span>
        </div>
        <div className="flex items-center gap-x-1 text-sm text-lmGrey300 dark:text-dmGrey100">
          <i className="fa-solid fa-chair"></i>
          <span>{amount_seats} Seats</span>
        </div>
      </div>
    </div>
  );
};

export default MobileOfferCardInfoPart