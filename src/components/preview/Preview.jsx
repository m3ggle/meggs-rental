import React from "react";
import Calendar from "../offerDetails/Calendar";
import PreviewBasicInfo from "./components/PreviewBasicInfo";
import PreviewButtons from "./components/PreviewButtons";
import PreviewIcons from "./components/PreviewIcons";
import PreviewImgs from "./components/PreviewImgs";
import PreviewOwner from "./components/PreviewOwner";

const Preview = ({ offerInformation }) => {
  return (
    <div className="flex h-[640px] w-[360px] max-w-[360px] flex-col gap-y-2 overflow-scroll rounded-2xl bg-white p-6 pt-10 shadow-xl dark:bg-dmGrey900 duration-300">
      <div className="relative flex w-full h-fit flex-col gap-y-2 overflow-scroll hideScrollbar">
        <PreviewIcons />
        <PreviewBasicInfo />
        <PreviewImgs />
        <div className={`-my-2 dark:mt-2 dark:mb-1 min-h-fit w-full rounded-2xl`}>
          <Calendar shadow={true} header={true} />
        </div>
        {/* <CarSpecWrapper amount="preview" specs={carSpecData} mobile={false} /> */}
        <PreviewOwner />
        <PreviewButtons />
      </div>
    </div>
  );
};

export default Preview;
