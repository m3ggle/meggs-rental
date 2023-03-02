import React from "react";

const SpecialHomepageOfferCardImagePart = ({
  onNavigationCallback,
  photoURL,
}) => {
  return (
    <img
      onClick={onNavigationCallback}
      src={photoURL[0]}
      alt="offer visual"
      className="absolute top-0 left-0 h-full w-full min-w-[110px] rounded-xl object-cover object-center"
    />
  );
};

export default SpecialHomepageOfferCardImagePart;
