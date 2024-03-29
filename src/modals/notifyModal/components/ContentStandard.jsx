import React from "react";
import Btn from "../../../components/common/Btn";
import { useNotifyModalContext } from "../../../context/notifyModal/notifyModalContext";

const ContentStandard = () => {
  const { extraInfo } = useNotifyModalContext();
  const { title, bulletPoints, primaryButton, secondaryButton } = extraInfo;

  return (
    <div className="hideScrollbar flex h-full w-full flex-col gap-y-9 600:gap-y-12 1000:max-w-[340px]">
      {/* <div className="hideScrollbar flex h-full w-full flex-col gap-y-9 overflow-scroll 600:gap-y-12 1000:max-w-[340px]"> */}
      <div className="flex w-full flex-col gap-y-2 600:gap-y-4">
        <h2 className="text-2xl font-semibold text-lmGrey800 dark:text-dmGrey25 600:text-4xl">
          {title}
        </h2>
        <ul className="flex list-disc flex-col gap-y-2 pl-6 text-base text-lmGrey600 dark:text-dmGrey100">
          {bulletPoints.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-y-2">
        {primaryButton && (
          <Btn
            title={primaryButton.title}
            uiType="primary"
            type="button"
            onClick={primaryButton.function}
            icon="fa-solid fa-chevron-right"
          />
        )}
        {secondaryButton && (
          <Btn
            title={secondaryButton.title}
            uiType="secondary"
            type="button"
            onClick={secondaryButton.function}
          />
        )}
      </div>
    </div>
  );
};

export default ContentStandard;
