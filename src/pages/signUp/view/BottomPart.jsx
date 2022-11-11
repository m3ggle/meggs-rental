import React from "react";
import Btn from "../../../components/Btn";

const BottomPart = ({
  firstBtn,
  firstBtnTitle,
  firstBtnType,
  firstBtnOnClick,
  secondBtn,
  secondBtnTitle,
  secondBtnType,
  secondBtnOnClick,
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
          title={firstBtnTitle}
          onClick={firstBtnOnClick}
        />
      )}
      {secondBtn && (
        <Btn
          uiType={secondBtn}
          type={secondBtnType}
          title={secondBtnTitle}
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
