import React from "react";

const SpecialHomepageOfferCardImagePart = ({
  onNavigationCallback,
  photoURL,
}) => {
  return (
    <div
      onClick={onNavigationCallback}
      className="absolute top-0 left-0 h-full w-full min-w-[110px] rounded-xl bg-cover bg-center"
      style={{
        backgroundImage: `url(${photoURL[0]})`,
      }}
    />
  );
};

export default SpecialHomepageOfferCardImagePart;
