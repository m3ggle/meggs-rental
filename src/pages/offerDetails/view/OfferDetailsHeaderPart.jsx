import React from "react";

const OfferDetailsHeaderPart = ({
  onClickCallback = () => {},
  value = "",
  leftIcon = "",
  rightIcon = "",
}) => {
  return (
    <div
      onClick={onClickCallback}
      className="flex items-center gap-x-2 text-lmGrey600 hover:text-lmGrey800 dark:text-dmGrey100 dark:hover:text-lmGrey25"
    >
      {leftIcon !== "" && (
        <div className="flex h-[14px] w-[14px] items-center justify-center">
          <i className={`${leftIcon} text-[14px]`} />
        </div>
      )}
      <span className="text-base">
        {value}
      </span>
      {rightIcon !== "" && (
        <div className="flex h-[14px] w-[14px] items-center justify-center">
          <i
            className={`${rightIcon} text-[14px]`}
          />
        </div>
      )}
    </div>
  );
};

export default OfferDetailsHeaderPart;
