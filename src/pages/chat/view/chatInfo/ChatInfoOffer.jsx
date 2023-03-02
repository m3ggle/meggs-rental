import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../../../components/common/Btn";
import Loading from "../../../../components/Loading";
import Location from "../../../../components/Location";
import CalendarWrapper from "../../../../components/offerDetails/calendar/CalendarWrapper";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";
import PreviewBasicInfo from "../../../explore/map/components/preview/components/PreviewBasicInfo";
import PreviewImgs from "../../../explore/map/components/preview/components/PreviewImgs";

const ChatInfoOffer = ({ offerInformation, offerIsLoading }) => {
  const { getSingleParam } = useUrlManipulation();
  const navigate = useNavigate();
  const handleViewOffer = () =>
    navigate(`/offer-details/${getSingleParam("offerId")}`);

  return (
    <div className="flex flex-col gap-y-2">
      <span className="text-lg text-lmGrey600 dark:text-dmGrey100">
        Original Offer - Snippet
      </span>
      {offerIsLoading ? (
        <Loading />
      ) : (
        <>
          <PreviewImgs offerImages={offerInformation.offer_pictures} />
          <div className="flex h-full w-full flex-col gap-y-1 rounded-xl bg-white p-6 shadow dark:mt-1 dark:bg-dmGrey900 dark:shadow-dmShadow">
            <PreviewBasicInfo offerInformation={offerInformation} />
          </div>
          <CalendarWrapper
            shadowUI={true}
            header={true}
            start_date={offerInformation.offer_dates.start_date}
              end_date={offerInformation.offer_dates.end_date}
          />
          <div
            className={`flex h-[256px] w-full flex-col gap-y-1 overflow-hidden rounded-xl bg-cover bg-center shadow dark:bg-dmGrey900 dark:shadow-dmShadow`}
          >
            <Location
              lng={offerInformation.offer_location.longitude}
              lat={offerInformation.offer_location.latitude}
            />
          </div>
          <Btn
            type="button"
            uiType="primary"
            title="View full Offer"
            onClick={handleViewOffer}
          />
        </>
      )}
    </div>
  );
};

export default ChatInfoOffer;
