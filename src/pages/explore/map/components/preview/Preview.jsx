import React from "react";
import Calendar from "../../../../../components/offerDetails/Calendar";
import PreviewBasicInfo from "./components/PreviewBasicInfo";
import PreviewButtons from "./components/PreviewButtons";
import PreviewIcons from "./components/PreviewIcons";
import PreviewImgs from "./components/PreviewImgs";
import PreviewOwner from "./components/PreviewOwner";

const Preview = ({ offerInformation }) => {
  return (
    // <div className="flex absolute left-7 top-7 bottom-7 z-20 h-[640px] w-fit max-w-[360px] overflow-scroll rounded-xl bg-white shadow-xl">
    <div className="flex h-[640px] w-[360px] max-w-[360px] flex-col gap-y-2 overflow-scroll rounded-2xl bg-white p-6 pt-10 shadow-xl duration-300 dark:bg-dmGrey900">
      <div className="hideScrollbar relative flex h-fit w-full flex-col gap-y-2 overflow-scroll">
        <PreviewIcons />
        <PreviewBasicInfo />
        <PreviewImgs />
        <div
          className={`-my-2 min-h-fit w-full rounded-2xl dark:mt-2 dark:mb-1`}
        >
          <Calendar shadow={true} header={true} />
        </div>
        {/* <CarSpecWrapper amount="preview" specs={carSpecData} mobile={false} /> */}
        <PreviewOwner />
        <PreviewButtons />
      </div>
    </div>
    // </div>
  );
};

export default Preview;
