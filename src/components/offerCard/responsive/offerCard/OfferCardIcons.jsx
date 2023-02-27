import React from "react";

const OfferCardIcons = ({ isLiked, onLikeCallback, onLocationCallback }) => {
  return (
    <>
      <i
        onClick={onLocationCallback}
        className="fa-solid fa-location-dot absolute right-[10px] top-10 text-2xl text-lmGrey200 drop-shadow duration-300 hover:text-lmPrimary/60 focus:text-lmPrimary dark:text-dmGrey300 500:left-3 500:top-3 500:right-auto 500:flex 500:text-white/40 dark:500:text-white/40 1400:left-6 1400:top-6 1400:text-[36px]"
      />
      <i
        onClick={onLikeCallback}
        className={`fa-solid fa-heart ${
          isLiked
            ? "text-red-500"
            : "text-lmGrey200 dark:text-dmGrey300 500:text-white/40 dark:500:text-white/40"
        } absolute right-2 top-2 text-2xl drop-shadow-sm duration-300 hover:text-red-400 500:right-3 500:top-3 500:flex 1400:right-6 1400:top-6 1400:text-[36px]`}
      />
    </>
  );
};

export default OfferCardIcons;
