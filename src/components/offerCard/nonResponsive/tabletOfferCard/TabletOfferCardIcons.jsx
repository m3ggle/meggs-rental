import React from 'react'

const TabletOfferCardIcons = ({
  liked,
  onLikeCallback,
  onLocationCallback,
}) => {
  return (
    <>
      <i
        onClick={onLocationCallback}
        className="fa-solid fa-location-dot absolute text-2xl drop-shadow duration-300 hover:text-lmPrimary/60 focus:text-lmPrimary left-3 top-3 right-auto flex text-white/40 dark:text-white/40"
      />
      <i
        onClick={onLikeCallback}
        className={`fa-solid fa-heart ${
          liked
            ? "text-red-500"
            : "text-white/40 dark:text-white/40"
        } absolute text-2xl drop-shadow-sm duration-300 hover:text-red-400 right-3 top-3 flex`}
      />
    </>
  );
};

export default TabletOfferCardIcons