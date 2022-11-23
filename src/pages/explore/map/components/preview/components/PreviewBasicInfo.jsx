import React from 'react'

const PreviewBasicInfo = ({offerInformation}) => {
  const {location, name, price} = offerInformation
  
  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex items-center text-lmGrey600 dark:text-dmGrey100">
        <div
          className="fa-solid fa-location-dot mb-[3px] h-[14px] w-[14px] text-[14px]"
          aria-hidden="true"
        />
        <span className="w-10/12 cursor-pointer truncate text-sm">
          {location.formatted}
        </span>
      </div>
      <span className="w-10/12 truncate text-xl text-lmGrey800 dark:text-dmGrey25">
        {name}
      </span>
      <div className="flex w-full items-center gap-x-[2px] overflow-hidden truncate">
        <span className="truncate text-lg text-lmPrimary dark:text-dmPrimary">
          {price.day}{" "}
          <span className="truncate text-sm text-lmGrey400 dark:text-dmGrey300">
            /day
          </span>
        </span>
        <div className="flex items-center justify-center px-1">
          <div className="h-1 w-1 rounded-full bg-lmGrey400"></div>
        </div>
        <span className="truncate text-lg text-lmPrimary dark:text-dmPrimary">
          {price.week}{" "}
          <span className="truncate text-sm text-lmGrey400 dark:text-dmGrey300">
            /week
          </span>
        </span>
        <div className="flex items-center justify-center px-1">
          <div className="h-1 w-1 rounded-full bg-lmGrey400"></div>
        </div>
        <span className="truncate text-lg text-lmPrimary dark:text-dmPrimary">
          {price.month}{" "}
          <span className="truncate text-sm text-lmGrey400 dark:text-dmGrey300">
            /month
          </span>
        </span>
      </div>
    </div>
  );
}

export default PreviewBasicInfo