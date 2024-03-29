import { motion } from "framer-motion";
import React, { memo } from "react";
import { useGetOfferDetails } from "../../../../../api/supabase/useGetOfferDetails";
import Loading from "../../../../../components/Loading";
import CalendarWrapper from "../../../../../components/offerDetails/calendar/CalendarWrapper";
import CarSpecWrapper from "../../../../../components/offerDetails/CarSpecWrapper";
import PreviewBasicInfo from "./components/PreviewBasicInfo";
import PreviewButtons from "./components/PreviewButtons";
import PreviewIcons from "./components/PreviewIcons";
import PreviewImgs from "./components/PreviewImgs";
import PreviewOwner from "./components/PreviewOwner";

const Preview = ({ offerId }) => {
  const { offerInformation, isLoading } = useGetOfferDetails(offerId);

  return (
    <motion.div
      animate={offerId !== null ? "visible" : "hidden"}
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 1 },
      }}
      className={`flex h-[640px] w-[360px] max-w-[360px] flex-col gap-y-2 overflow-scroll rounded-2xl bg-white p-6 pt-10 shadow-xl duration-300 dark:bg-dmGrey900`}
    >
      <div className="hideScrollbar relative flex h-fit w-full flex-1 flex-col gap-y-4 overflow-scroll">
        {isLoading ? (
          <Loading height="2/3" />
        ) : (
          <>
            <PreviewIcons offerInformation={offerInformation} />
            <PreviewBasicInfo offerInformation={offerInformation} />
            <PreviewImgs offerImages={offerInformation.offer_pictures} />
            <div className={`min-h-fit w-full rounded-2xl px-1`}>
              <CalendarWrapper
                start_date={offerInformation.offer_dates.start_date}
                end_date={offerInformation.offer_dates.end_date}
                shadowUI={true}
                header={true}
              />
            </div>
            <CarSpecWrapper
              specs={offerInformation.vehicle_details}
              amount="preview"
            />
            <PreviewOwner owner={offerInformation.offer_owner} />
            <PreviewButtons offerInformation={offerInformation} />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default memo(Preview);
