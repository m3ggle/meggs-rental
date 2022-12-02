import {motion} from "framer-motion"
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

  console.log(show)

  return (
    // <div className="flex absolute left-7 top-7 bottom-7 z-20 h-[640px] w-fit max-w-[360px] overflow-scroll rounded-xl bg-white shadow-xl">
    <motion.div
      animate={show && "visible"}
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 1 },
      }}
      className={`flex h-[640px] w-[360px] max-w-[360px] flex-col gap-y-2 overflow-scroll rounded-2xl bg-white p-6 pt-10 shadow-xl duration-300 dark:bg-dmGrey900`}
      // className={`${
      //   show ? "flex" : "hidden"
      // } h-[640px] w-[360px] max-w-[360px] flex-col gap-y-2 overflow-scroll rounded-2xl bg-white p-6 pt-10 shadow-xl duration-300 dark:bg-dmGrey900`}
    >
      <div className="hideScrollbar relative flex h-fit w-full flex-col gap-y-4 overflow-scroll">
        {offerInformation && (
          <>
            <PreviewIcons />
            <PreviewBasicInfo offerInformation={offerInformation} />
            <PreviewImgs offerImages={offerInformation.photoUrl} />
            <div className={`min-h-fit w-full rounded-2xl px-1`}>
              <Calendar
                dates={offerInformation.calendar}
                shadowUI={true}
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
    </motion.div>
    // </div>
  );
};

export default Preview;
