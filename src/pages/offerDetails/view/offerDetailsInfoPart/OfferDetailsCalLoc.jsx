import React from "react";
import Location from "../../../../components/Location";
import CalendarWrapper from "../../../../components/offerDetails/calendar/CalendarWrapper";

const OfferDetailsCalLoc = ({ offerInformation }) => {
  const { offer_dates } = offerInformation;
  const { start_date, end_date } = offer_dates;

  return (
    <div className="flex flex-col gap-6 700:flex-row 1200:flex-col 1400:flex-row">
      {/* calendar */}
      <div className="flex w-full flex-col">
        <span className="text-lg text-lmGrey600 dark:text-dmGrey100">
          Calendar
        </span>
        <div className="flex w-full flex-col items-center gap-y-1 overflow-hidden rounded-3xl bg-white shadow dark:bg-dmGrey900 dark:shadow-dmShadow 1200:p-6 1400:p-0">
          <div className="w-full 1200:w-[360px] 1400:w-full">
            <CalendarWrapper start_date={start_date} end_date={end_date} />
          </div>
        </div>
      </div>
      {/* location */}
      <div className="flex w-full flex-col">
        <span className="text-lg text-lmGrey600 dark:text-dmGrey100">
          Location
        </span>
        <div
          className={`flex h-[256px] w-full flex-col gap-y-1 overflow-hidden rounded-3xl bg-cover bg-center shadow dark:bg-dmGrey900 dark:shadow-dmShadow`}
        >
          <Location
            lng={offerInformation.offer_location.longitude}
            lat={offerInformation.offer_location.latitude}
          />
        </div>
      </div>
    </div>
  );
};

export default OfferDetailsCalLoc;
