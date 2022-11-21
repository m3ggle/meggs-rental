import React from 'react'
import Bmw1 from "../../../assets/img/bmw1.jpg";
import Bmw2 from "../../../assets/img/bmw2.jpg";
import Bmw3 from "../../../assets/img/bmw3.jpg";
import Bmw4 from "../../../assets/img/bmw4.jpg";
import Bmw5 from "../../../assets/img/bmw5.jpg";

const picArray = [Bmw1, Bmw2, Bmw3, Bmw4, Bmw5];

const OfferDetailsImgPart = () => {
  return (
    <div className="flex h-[352px] w-full justify-center 1200:h-full">
      {/* img carousel */}
      <div className="hideScrollbar flex h-fit w-full max-w-[672px] gap-x-2 overflow-x-scroll rounded-lg px-6 700:px-0 1200:hidden">
        {picArray.map((pic, index) => (
          <div
            key={index}
            className="h-[348px] w-60 min-w-[240px] rounded-lg bg-slate-100 bg-cover bg-center shadow dark:dark:bg-dmGrey800"
            style={{ backgroundImage: `url(${pic})` }}
          ></div>
        ))}
      </div>
      {/* big img */}
      <div
        className="fixed top-0 left-0 bottom-0 hidden h-screen w-6/12 items-center justify-center rounded-r-[60px] bg-black bg-cover bg-center shadow-md 1200:flex"
        style={{ backgroundImage: `url(${Bmw2})` }}
      >
        <div className="flex w-full items-center justify-between px-6 opacity-60">
          <div
            aria-hidden="true"
            className="fa-solid fa-chevron-left flex h-[84px] w-[84px] items-center justify-center text-[36px] text-white"
          />
          <div
            aria-hidden="true"
            className="fa-solid fa-chevron-right flex h-[84px] w-[84px] items-center justify-center text-[36px] text-white"
          />
        </div>
      </div>
    </div>
  );
}

export default OfferDetailsImgPart