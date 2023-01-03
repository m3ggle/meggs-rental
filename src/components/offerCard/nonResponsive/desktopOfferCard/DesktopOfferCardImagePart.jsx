import React from 'react'

const DesktopOfferCardImagePart = ({ onNavigationCallback, photoURL }) => {
  return (
    <div
      onClick={onNavigationCallback}
      className="min-w-[110px] bg-cover bg-center absolute top-0 left-0 w-full rounded-xl h-80"
      style={{
        backgroundImage: `url(${photoURL[0]})`,
      }}
    />
  );
};

export default DesktopOfferCardImagePart