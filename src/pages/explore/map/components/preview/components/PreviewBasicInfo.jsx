import React from "react";
import { useHandleFly } from "../../../../../../hooks/useHandleFly";

const PreviewBasicInfo = ({ offerInformation }) => {
  const { offer_basics, offer_location, offer_prices } = offerInformation;
  const { latitude, longitude, formatted } = offer_location
  const { offer_name } = offer_basics
  const {day_price, week_price, month_price} = offer_prices

  const { handleFly } = useHandleFly();

  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex items-center text-lmGrey600 dark:text-dmGrey100">
        <div
          className="fa-solid fa-location-dot mb-[3px] h-[14px] w-[14px] text-[14px]"
          aria-hidden="true"
        />
        <span
          onClick={() => handleFly(longitude, latitude)}
          className="w-10/12 cursor-pointer truncate text-sm"
        >
          {formatted}
        </span>
      </div>
      <span className="w-10/12 truncate text-xl text-lmGrey800 dark:text-dmGrey25">
        {offer_name}
      </span>
      <div className="flex w-full items-center gap-x-[2px] overflow-hidden truncate">
        <span className="truncate text-lg text-lmPrimary dark:text-dmPrimary">
          {day_price}{" "}
          <span className="truncate text-sm text-lmGrey400 dark:text-dmGrey300">
            /day
          </span>
        </span>
        <div className="flex items-center justify-center px-1">
          <div className="h-1 w-1 rounded-full bg-lmGrey400"></div>
        </div>
        <span className="truncate text-lg text-lmPrimary dark:text-dmPrimary">
          {week_price}{" "}
          <span className="truncate text-sm text-lmGrey400 dark:text-dmGrey300">
            /week
          </span>
        </span>
        <div className="flex items-center justify-center px-1">
          <div className="h-1 w-1 rounded-full bg-lmGrey400"></div>
        </div>
        <span className="truncate text-lg text-lmPrimary dark:text-dmPrimary">
          {month_price}{" "}
          <span className="truncate text-sm text-lmGrey400 dark:text-dmGrey300">
            /month
          </span>
        </span>
      </div>
    </div>
  );
};

export default PreviewBasicInfo;
