import React from 'react'

const DesktopOfferCardIcons = ({
  liked,
  onLikeCallback,
  onLocationCallback,
}) => {
  return (
    <>
      <i
        onClick={onLocationCallback}
        className="fa-solid fa-location-dot absolute drop-shadow duration-300 hover:text-lmPrimary/60 focus:text-lmPrimary right-auto flex text-white/40 dark:text-white/40 left-6 top-6 text-[36px]"
      />
      <i
        onClick={onLikeCallback}
        className={`fa-solid fa-heart ${
          liked
            ? "text-red-500"
            : "text-white/40 dark:text-white/40"
        } absolute drop-shadow-sm duration-300 hover:text-red-400 flex right-6 top-6 text-[36px]`}
      />
    </>
  );
};

export default DesktopOfferCardIcons