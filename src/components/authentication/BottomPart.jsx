import React from "react";
import Btn from "../common/Btn";

const BottomPart = ({
  firstBtn,
  firstBtnTitle,
  firstBtnType,
  firstBtnOnClick,
  firstBtnIsLoading = false,
  secondBtn,
  secondBtnTitle,
  secondBtnType,
  secondBtnOnClick,
  secondBtnIsLoading = false,
  underBtnFirstText,
  underBtnFirstLinkText,
  underBtnFirstOnClick,
  underBtnSecondText,
  underBtnSecondLinkText,
  underBtnSecondOnClick,
}) => {
  return (
    <div className="flex flex-col gap-y-2 text-sm">
      {firstBtn && (
        <Btn
          uiType={firstBtn}
          type={firstBtnType}
          title={firstBtnIsLoading ? "Loading..." : firstBtnTitle}
          onClick={firstBtnOnClick}
        />
      )}
      {secondBtn && (
        <Btn
          uiType={secondBtn}
          type={secondBtnType}
          title={secondBtnIsLoading ? "Loading..." : secondBtnTitle}
          onClick={secondBtnOnClick}
        />
      )}
      {underBtnFirstText && (
        <span className="text-lmGrey500 dark:text-dmGrey300">
          {underBtnFirstText}{" "}
          <span
            onClick={underBtnFirstOnClick}
            className="cursor-pointer underline underline-offset-2 duration-300 dark:hover:text-dmGrey100"
          >
            {underBtnFirstLinkText}
          </span>
        </span>
      )}
      {underBtnSecondText && (
        <span className="text-lmGrey500 dark:text-dmGrey300">
          {underBtnSecondText}{" "}
          <span
            onClick={underBtnSecondOnClick}
            className="cursor-pointer underline underline-offset-2 duration-300 dark:hover:text-dmGrey100"
          >
            {underBtnSecondLinkText}
          </span>
        </span>
      )}
    </div>
  );
};

export default BottomPart;

/* 
Prop explanation
- firstBtn: string (primary or secondary, if empty the btn will not be shown and also the uiType)
- firstBtnTitle: string 
- firstBtnType: string (submit or button)
- firstBtnOnClick: callback function

under the button = underBtn...
- underBtnFirstText: string (if empty the span will not be shown)
- underBtnFirstLinkText: string
- underBtnFirstOnClick: callback function
*/
