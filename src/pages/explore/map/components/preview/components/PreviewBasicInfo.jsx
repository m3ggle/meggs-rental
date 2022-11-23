import React from 'react'

const PreviewBasicInfo = () => {
  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex items-center text-lmGrey600 dark:text-dmGrey100">
        <div
          className="fa-solid fa-location-dot mb-[3px] h-[14px] w-[14px] text-[14px]"
          aria-hidden="true"
        />
        <span className="cursor-pointer text-sm">Salzbuger Straße 18</span>
      </div>
      <span className="text-xl text-lmGrey800 dark:text-dmGrey25">
        BMW M3 E30
      </span>
      <span className="dark:text-dmGreyPrimary text-lg text-lmPrimary">
        600€{" "}
        <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
          /month
        </span>
      </span>
    </div>
  );
}

export default PreviewBasicInfo