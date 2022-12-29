import React from "react";
import { useNavigate } from "react-router-dom";
import { useNotifyModalContext } from "../../../context/notifyModal/notifyModalContext";
import Btn from "../../common/Btn";

// only difference between ContentStandard and ContentAuth is, how this component handles the button click event
// problem: can't use navigate in context, it has to be inside <Router>

const ContentNavigate = () => {
  const { extraInfo } = useNotifyModalContext();
  const { title, bulletPoints, primaryButton, secondaryButton } = extraInfo;

  const navigate = useNavigate();

  const handleClick = (func) => {
    if (typeof func === "function") {
      func();
      return;
    }

    navigate(`/${func}`);
  };

  return (
    <div className="hideScrollbar flex h-full w-full flex-col gap-y-9 overflow-scroll 600:gap-y-12 1000:max-w-[340px]">
      <div className="flex w-full flex-col gap-y-2 600:gap-y-4">
        <h2 className="text-2xl font-semibold text-lmGrey800 600:text-4xl">
          {title}
        </h2>
        <ul className="flex list-disc flex-col gap-y-2 pl-6 text-base text-lmGrey600 dark:text-dmGrey100">
          {bulletPoints.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-y-2">
        <Btn
          title={primaryButton.title}
          uiType="primary"
          type="button"
          onClick={() => handleClick(primaryButton.function)}
          icon="fa-solid fa-chevron-right"
        />
        <Btn
          title={secondaryButton.title}
          uiType="secondary"
          type="button"
          onClick={() => handleClick(secondaryButton.function)}
        />
      </div>
    </div>
  );
};

export default ContentNavigate;
