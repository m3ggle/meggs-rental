import React from "react";

const CarSpec = ({title, value, icon}) => {
  return (
    <div className="flex h-[100px] w-[96px] flex-col items-center justify-center gap-y-2 rounded-lg py-3 shadow-md dark:border dark:border-solid dark:border-dmGrey800 dark:bg-dmGrey900">
      <div
        className={`${icon} flex h-6 w-6 items-center justify-center text-[24px] text-lmGrey300 dark:text-dmGrey300`}
      ></div>
      <div className="flex flex-col items-center justify-center gap-y-1 text-xs">
        <span className="text-lmGrey300 dark:text-dmGrey300">{title}</span>
        <span className="text-lmGrey600 dark:text-dmGrey100">{value}</span>
      </div>
    </div>
  );
};

export default CarSpec;
