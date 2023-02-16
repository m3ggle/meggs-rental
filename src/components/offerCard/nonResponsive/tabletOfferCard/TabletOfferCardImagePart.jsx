import React from "react";

const TabletOfferCardImagePart = ({ onNavigationCallback, picture_urls }) => {
  return (
    <div
      onClick={onNavigationCallback}
      className="absolute top-0 left-0 h-[200px] w-full rounded-xl bg-cover bg-center"
      style={{
        backgroundImage: `url(${picture_urls[0]})`,
      }}
    />
  );
};

export default TabletOfferCardImagePart;
