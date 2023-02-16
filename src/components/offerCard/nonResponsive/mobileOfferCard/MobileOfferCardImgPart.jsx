import React from "react";

const MobileOfferCardImgPart = ({ onNavigationCallback, picture_urls }) => {
  return (
    <div
      onClick={onNavigationCallback}
      className="min-h-[118px] w-[110px] min-w-[110px] rounded-lg bg-cover bg-center"
      style={{
        backgroundImage: `url(${picture_urls[0]})`,
      }}
    >
      <i className="fa-solid fa-location-dot absolute left-3 top-3 hidden text-2xl text-white/40 drop-shadow"></i>
      <i className="fa-solid fa-heart absolute right-3 top-3 hidden text-2xl text-white/40 drop-shadow"></i>
    </div>
  );
};

export default MobileOfferCardImgPart;
