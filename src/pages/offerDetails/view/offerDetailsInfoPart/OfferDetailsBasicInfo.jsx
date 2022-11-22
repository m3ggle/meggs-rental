import React from "react";
import { useHandleLocationNavigation } from "../../../../hooks/catalog/useHandleLocationNavigation";
import styles from "../../../../style";

const OfferDetailsBasicInfo = ({ offerInformation }) => {
  const { name, location, price, extraInfo, offerId } = offerInformation;

  const { handleLocationNavigation } = useHandleLocationNavigation();
  const handleLocation = () => handleLocationNavigation(offerId, location);

  return (
    <div className="flex gap-x-6">
      {/* basic info */}
      <div className="flex w-full flex-col">
        <span className="text-lg text-lmGrey600 dark:text-dmGrey100">
          Basic Information
        </span>
        <div
          className={`flex h-full w-full flex-col gap-y-1 rounded-3xl bg-white p-6 shadow-md ${styles.darkModeBorder} dark:bg-dmGrey900`}
        >
          <div className="flex items-center text-lmGrey600 dark:text-dmGrey100">
            <div
              className="fa-solid fa-location-dot mb-[3px] h-[16px] w-[16px] text-[16px]"
              aria-hidden="true"
            />
            <span onClick={handleLocation} className="text-base cursor-pointer">
              {location.formatted}
            </span>
          </div>
          <span className="text-2xl font-semibold text-lmGrey800 dark:text-dmGrey25">
            {name}
          </span>
          <div className="flex w-full flex-wrap items-center gap-x-[2px] 700:hidden 1200:flex 1400:hidden">
            <span className="text-lg text-lmPrimary dark:text-dmPrimary">
              {price.day}{" "}
              <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
                /day
              </span>
            </span>
            <div className="flex items-center justify-center px-1">
              <div className="h-1 w-1 rounded-full bg-lmGrey400"></div>
            </div>
            <span className="text-lg text-lmPrimary dark:text-dmPrimary">
              {price.week}{" "}
              <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
                /week
              </span>
            </span>
            <div className="flex items-center justify-center px-1">
              <div className="h-1 w-1 rounded-full bg-lmGrey400"></div>
            </div>
            <span className="text-lg text-lmPrimary dark:text-dmPrimary">
              {price.month}{" "}
              <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
                /month
              </span>
            </span>
          </div>
          {/* bio */}
          <div className="hidden h-[60px] w-full 700:flex 1200:hidden 1400:flex">
            <span className="w-full text-sm text-lmGrey600 line-clamp-3 dark:text-dmGrey300">
              {extraInfo}
            </span>
          </div>
        </div>
      </div>
      {/* prices */}
      <div className="hidden h-full w-[176px] min-w-[176px] flex-col 700:flex 1200:hidden 1400:flex">
        <span className="text-lg text-lmGrey600 dark:text-dmGrey100">
          Prices
        </span>
        <div
          className={`flex h-full w-full flex-col gap-y-1 rounded-3xl bg-white p-6 shadow-md ${styles.darkModeBorder} dark:bg-dmGrey900`}
        >
          <span className="text-lg text-lmPrimary dark:text-dmPrimary">
            {price.day}{" "}
            <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
              /day
            </span>
          </span>
          <span className="text-lg text-lmPrimary dark:text-dmPrimary">
            {price.week}{" "}
            <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
              /week
            </span>
          </span>
          <span className="text-lg text-lmPrimary dark:text-dmPrimary">
            {price.month}{" "}
            <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
              /month
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OfferDetailsBasicInfo;
