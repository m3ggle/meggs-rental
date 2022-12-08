import React from 'react'

const MobileOfferCardIcons = ({
  liked,
  onLikeCallback,
  onLocationCallback,
}) => {
  return (
    <>
      <i
        onClick={onLocationCallback}
        className="fa-solid fa-location-dot absolute right-[10px] top-10 z-10 text-2xl text-lmGrey200 drop-shadow duration-300 hover:scale-102 hover:text-lmPrimary/60 active:scale-99 active:text-lmPrimary dark:text-dmGrey300"
      />
      <i
        onClick={onLikeCallback}
        className={`fa-solid fa-heart ${
          liked ? "text-red-500" : "text-lmGrey200 dark:text-dmGrey300"
        } absolute right-2 top-2 z-10 text-2xl drop-shadow duration-300 hover:text-red-400`}
      />
    </>
  );
};

export default MobileOfferCardIcons