import React from 'react'

const TabletOfferCardImagePart = ({ onNavigationCallback, photoUrl }) => {
  return (
    <div
      onClick={onNavigationCallback}
      className="bg-cover bg-center absolute top-0 left-0 h-[200px] w-full rounded-xl"
      style={{
        backgroundImage: `url(${photoUrl[0]})`,
      }}
    />
  );
};

export default TabletOfferCardImagePart