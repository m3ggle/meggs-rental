import React from "react";

const OfferCardImagePart = ({ onNavigationCallback, photoURLs }) => {
  return (
    <img
      src={photoURLs[0]}
      alt="offer visual"
      className="h-full min-w-[110px] max-h-[124px] 500:max-h-fit rounded-lg object-cover object-center 500:absolute 500:top-0 500:left-0 500:h-[200px] 500:w-full 500:rounded-xl 1400:h-80"
      onClick={onNavigationCallback}
    />
  );
};

export default OfferCardImagePart;
