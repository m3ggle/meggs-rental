import React from "react";

const CarSpec = ({title, value, icon}) => {
  const renderValue = () => {
    if (title === "Smoking" || title === "Eating") {
      return value ? "Yes" : "No"  
    }
    return value
  }

  return (
    <div className="flex h-[100px] w-[96px] flex-col items-center justify-center gap-y-2 rounded-lg py-3 shadow dark:bg-dmGrey900 dark:shadow-dmShadow">
      <div
        className={`${icon} flex h-6 w-6 items-center justify-center text-[24px] text-lmGrey300 dark:text-dmGrey300`}
      ></div>
      <div className="flex flex-col items-center justify-center w-full gap-y-1 text-xs px-1">
        <span className="truncate text-lmGrey300 dark:text-dmGrey300">
          {title}
        </span>
        <span className="truncate w-full text-center text-lmGrey600 dark:text-dmGrey100">
          {renderValue()}
        </span>
      </div>
    </div>
  );
};

export default CarSpec;
