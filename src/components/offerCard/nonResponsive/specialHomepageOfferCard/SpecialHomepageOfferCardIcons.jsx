import React from 'react'

const SpecialHomepageOfferCardIcons = ({
  liked,
  onLikeCallback,
  onLocationCallback,
}) => {
  return (
    <>
      <i
        onClick={onLocationCallback}
        className="fa-solid fa-location-dot absolute right-auto left-6 top-6 flex text-[36px] text-white/40 drop-shadow duration-300 hover:text-lmPrimary/60 focus:text-lmPrimary dark:text-white/40"
      />
      <i
        onClick={onLikeCallback}
        className={`fa-solid fa-heart ${
          liked ? "text-red-500" : "text-white/40 dark:text-white/40"
        } absolute right-6 top-6 flex text-[36px] drop-shadow-sm duration-300 hover:text-red-400`}
      />
    </>
  );
};

export default SpecialHomepageOfferCardIcons