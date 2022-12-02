import React from "react";
import Calendar from "../../../../../components/offerDetails/Calendar";
import CarSpecWrapper from "../../../../../components/offerDetails/CarSpecWrapper";
import PreviewBasicInfo from "./components/PreviewBasicInfo";
import PreviewButtons from "./components/PreviewButtons";
import PreviewIcons from "./components/PreviewIcons";
import PreviewImgs from "./components/PreviewImgs";
import PreviewOwner from "./components/PreviewOwner";
import { usePreviewLogic } from "./hooks/usePreviewLogic";

const Preview = () => {
  const { show, offerInformation } = usePreviewLogic();

  return (
    // <div className="flex absolute left-7 top-7 bottom-7 z-20 h-[640px] w-fit max-w-[360px] overflow-scroll rounded-xl bg-white shadow-xl">
    <div
      className={`${
        show ? "flex" : "hidden"
      } h-[640px] w-[360px] max-w-[360px] flex-col gap-y-2 overflow-scroll rounded-2xl bg-white p-6 pt-10 shadow-xl duration-300 dark:bg-dmGrey900`}
    >
      <div className="hideScrollbar relative flex h-fit w-full flex-col gap-y-2 overflow-scroll">
        <PreviewIcons />
        {offerInformation && (
          <>
            <PreviewBasicInfo offerInformation={offerInformation} />
            <PreviewImgs offerImages={offerInformation.photoUrl} />
            <div
              className={`-my-2 min-h-fit w-full rounded-2xl dark:mt-2 dark:mb-1`}
            >
              <Calendar
                dates={offerInformation.calendar}
                shadow={true}
                header={true}
              />
            </div>
            <CarSpecWrapper
              specs={offerInformation.carSpecs}
              amount="preview"
            />
            <PreviewOwner ownerId={offerInformation.ownerId} />
            <PreviewButtons offerId={offerInformation.offerId} />
          </>
        )}
      </div>
    </div>
    // </div>
  );
};

export default Preview;
