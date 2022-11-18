import React from "react";

const Homepage = () => {
  return (
    <div className="flex w-full flex-col gap-y-6">
      <div
        className="relative flex h-screen flex-col gap-y-[64px] bg-slate-400 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1587305032255-55bb50c4956b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80)",
        }}
      >
        <div className="absolute left-0 top-0 bottom-0 right-0 z-10 h-full w-full bg-black/50" />
        <div className="z-10 flex h-full w-full flex-col items-center justify-center gap-y-[48px] bg-cover bg-center">
          <span className="text-[64px] text-white">
            Rental cars can be experienced.
          </span>
          <div className="flex items-center justify-center gap-x-2 rounded-full bg-white p-3 shadow">
            {/* where */}
            <div className="flex w-[240px] cursor-pointer items-center gap-x-2 rounded-full px-6 hover:bg-lmGrey25 hover:shadow duration-300">
              <i className="fa-solid fa-location-dot flex h-[68px] w-9 items-center justify-center text-[36px] text-lmGrey200" />
              <div className="flex flex-col p-3">
                <span className="text-sm text-lmGrey400">Where</span>
                <span className="text-base text-lmGrey600">Dresden</span>
              </div>
            </div>
            {/* divider */}
            <div className="h-full w-[1px] rounded-full bg-lmGrey200" />
            {/* start date */}
            <div className="flex items-center gap-x-2 rounded-full px-6 hover:bg-lmGrey25 hover:shadow duration-300 cursor-pointer">
              <i className="fa-solid fa-calendar-days flex h-[68px] w-9 items-center justify-center text-[36px] text-lmGrey200" />
              <div className="flex flex-col p-3">
                <span className="text-sm text-lmGrey400">Start Date</span>
                <span className="text-base text-lmGrey600">14.10.2022</span>
              </div>
            </div>
            {/* end date */}
            <div className="flex items-center gap-x-2 rounded-full px-6 hover:bg-lmGrey25 hover:shadow duration-300 cursor-pointer">
              <i className="fa-solid fa-calendar-days flex h-[68px] w-9 items-center justify-center text-[36px] text-lmGrey200" />
              <div className="flex flex-col p-3">
                <span className="text-sm text-lmGrey400">End Date</span>
                <span className="text-base text-lmGrey600">28.10.2022</span>
              </div>
            </div>
            {/* divider */}
            <div className="h-full w-[1px] rounded-full bg-lmGrey200" />
            {/* filter */}
            <div className="flex w-fit items-center gap-x-2 rounded-full px-6 hover:bg-lmGrey25 hover:shadow duration-300 cursor-pointer">
              <i className="fa-solid fa-filter flex h-[68px] w-9 items-center justify-center text-[36px] text-lmGrey200" />
              <div className="flex flex-col p-3">
                <span className="text-sm text-lmGrey400">Filter For</span>
                <span className="text-base text-lmGrey600">
                  Not exact Matches
                </span>
              </div>
            </div>
            {/* search */}
            <div className="fa-solid fa-magnifying-glass flex h-[68px] w-[68px] items-center justify-center rounded-full bg-lmPrimary text-[28px] text-white cursor-pointer hover:scale-102 active:scale-98 duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
