import React from "react";

const TabletOfferCardImagePart = ({ onNavigationCallback, photoURL }) => {
  return (
    <div
      onClick={onNavigationCallback}
      className="absolute top-0 left-0 h-[200px] w-full rounded-xl bg-cover bg-center"
      style={{
        backgroundImage: `url(${photoURL[0]})`,
      }}
    />
  );
};

export default TabletOfferCardImagePart;
