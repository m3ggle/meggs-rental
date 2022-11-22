import React from 'react'
import Calendar from '../../../../components/offerDetails/Calendar';
import styles from '../../../../style';
import GoogleMap from "../../../../assets/img/googleMap.png";

const OfferDetailsCalLoc = () => {
  return (
    <div className="flex flex-col gap-6 700:flex-row 1200:flex-col 1400:flex-row">
      {/* calendar */}
      <div className="flex w-full flex-col">
        <span className="text-lg text-lmGrey600 dark:text-dmGrey100">
          Calendar
        </span>
        <div className="flex w-full flex-col items-center gap-y-1 overflow-hidden rounded-3xl bg-white shadow-md 1200:p-6 1400:p-0">
          <div className="w-full 1200:w-[360px] 1400:w-full">
            <Calendar />
          </div>
        </div>
      </div>
      {/* location */}
      <div className="flex w-full flex-col">
        <span className="text-lg text-lmGrey600 dark:text-dmGrey100">
          Location
        </span>
        <div
          className={`${styles.darkModeBorder} flex h-[256px] w-full flex-col gap-y-1 rounded-3xl bg-white bg-cover bg-center shadow-md dark:bg-dmGrey900`}
          style={{ backgroundImage: `url(${GoogleMap})` }}
        />
      </div>
    </div>
  );
}

export default OfferDetailsCalLoc