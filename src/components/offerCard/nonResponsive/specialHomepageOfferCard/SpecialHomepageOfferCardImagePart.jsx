import React from 'react'

const SpecialHomepageOfferCardImagePart = ({
  onNavigationCallback,
  photoUrl,
}) => {
  return (
    <div
      onClick={onNavigationCallback}
      className="absolute top-0 left-0 h-full w-full min-w-[110px] rounded-xl bg-cover bg-center"
      style={{
        backgroundImage: `url(${photoUrl[0]})`,
      }}
    />
  );
};

export default SpecialHomepageOfferCardImagePart