import React from "react";
import MapScreenshot from "../../../assets/img/mapScreenshot.webp";

const HomepageSearch = () => {
  const handleOpenFilter = () => {
    
  }
  
  return (
    <div
      id="directSearch"
      className="h-[720px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${MapScreenshot})` }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-t from-white via-white/0 to-white">
        <div className="flex h-[92px] w-[714px] items-center gap-x-2 rounded-full bg-white p-3 shadow dark:bg-dmGrey900">
          {/* first col */}
          <div className="flex w-full items-center justify-center gap-x-2  rounded-full px-2">
            {/* icon */}
            <div className="flex h-full w-9 items-center justify-center">
              <i className="fa-solid fa-location-dot text-[36px] text-lmGrey200" />
            </div>
            {/* location */}
            <div className="flex h-full w-full flex-col p-3">
              <span className="text-base text-lmGrey400">Where</span>
              <input
                type="text"
                onFocus={handleOpenFilter}
                placeholder="Dresden..."
                className={`w-[116px] bg-transparent text-lg text-lmGrey600 placeholder:text-dmGrey300 focus:outline-none dark:text-dmGrey25
                placeholder:dark:text-dmGrey300`}
              />
            </div>
          </div>

          {/* second col */}
          <div className="flex w-full items-center justify-center gap-x-2  rounded-full px-2">
            {/* icon */}
            <div className="flex h-full w-9 items-center justify-center">
              <i className="fa-solid fa-calendar-days text-[36px] text-lmGrey200" />
            </div>
            {/* location */}
            <div className="flex h-full w-full flex-col p-3">
              <span className="text-base text-lmGrey400">Start Date</span>
              <input
                type="text"
                onFocus={handleOpenFilter}
                placeholder="14.10.2023"
                className={`w-[116px] bg-transparent text-lg text-lmGrey600 placeholder:text-dmGrey300 focus:outline-none dark:text-dmGrey25
                placeholder:dark:text-dmGrey300`}
              />
            </div>
          </div>

          {/* third col */}
          <div className="flex w-full items-center justify-center gap-x-2  rounded-full px-2">
            {/* icon */}
            <div className="flex h-full w-9 items-center justify-center">
              <i className="fa-solid fa-calendar-days text-[36px] text-lmGrey200" />
            </div>
            {/* location */}
            <div className="flex h-full w-full flex-col p-3">
              <span className="text-base text-lmGrey400">End Date</span>
              <input
                type="text"
                onFocus={handleOpenFilter}
                placeholder="14.10.2023"
                className={`w-[116px] bg-transparent text-lg text-lmGrey600 placeholder:text-dmGrey300 focus:outline-none dark:text-dmGrey25
                placeholder:dark:text-dmGrey300`}
              />
            </div>
          </div>

          {/* search button */}
          <div
            onClick={handleOpenFilter}
            className="flex h-[68px] w-[68px] cursor-pointer items-center justify-center rounded-full bg-lmPrimary p-6 shadow"
          >
            <i className="fa-solid fa-magnifying-glass text-[28px] text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageSearch;
