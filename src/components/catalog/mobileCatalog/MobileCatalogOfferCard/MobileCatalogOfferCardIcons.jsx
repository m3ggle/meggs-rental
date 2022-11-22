import React from 'react'

const MobileCatalogOfferCardIcons = ({
  liked,
  onLikeCallback,
  onLocationCallback,
}) => {
  return (
    <>
      <i
        onClick={onLocationCallback}
        className="fa-solid fa-location-dot absolute right-[10px] top-10 z-10 text-2xl text-white/40 drop-shadow duration-300 hover:text-lmPrimary/50 focus:text-lmPrimary"
      />
      <i
        onClick={onLikeCallback}
        className={`fa-solid fa-heart ${
          liked ? "text-red-500" : "text-white/40"
        } absolute right-2 top-2 z-10 text-2xl drop-shadow duration-300 hover:text-red-400`}
      />
    </>
  );
};

export default MobileCatalogOfferCardIcons