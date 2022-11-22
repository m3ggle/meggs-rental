import React from "react";
import ImageCarousel from "../components/ImageCarousel";

const OfferDetailsImgPart = ({ offerImages }) => {
  return (
    <div className="flex h-[352px] w-full justify-center 1200:h-full">
      {/* img carousel */}
      <div className="hideScrollbar flex h-fit w-full max-w-[672px] gap-x-2 overflow-x-scroll rounded-lg px-6 700:px-0 1200:hidden">
        {offerImages.map((pic, index) => (
          <div
            key={index}
            className="h-[348px] w-60 min-w-[240px] rounded-lg bg-slate-100 bg-cover bg-center shadow dark:dark:bg-dmGrey800"
            style={{ backgroundImage: `url(${pic})` }}
          ></div>
        ))}
      </div>

      <ImageCarousel offerImages={offerImages} />
    </div>
  );
};

export default OfferDetailsImgPart;
