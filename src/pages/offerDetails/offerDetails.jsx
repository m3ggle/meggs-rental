import React from "react";
import GoogleMap from "../../assets/img/googleMap.png";
import Calendar from "../../components/offerDetails/Calendar";
import CarSpecWrapper from "../../components/offerDetails/CarSpecWrapper";
import ReviewSection from "../../components/ratings/ReviewSection";
import UserProfileBig from "../../components/userProfile/UserProfileBig";
import ExampleData from "../../ExampleData";
import Bmw1 from "../../assets/img/bmw1.jpg";
import Bmw2 from "../../assets/img/bmw2.jpg";
import Bmw3 from "../../assets/img/bmw3.jpg";
import Bmw4 from "../../assets/img/bmw4.jpg";
import Bmw5 from "../../assets/img/bmw5.jpg";

const picArray = [Bmw1, Bmw2, Bmw3, Bmw4, Bmw5];
const { carSpecData, userProfileBig } = ExampleData();

const OfferDetails = () => {
  return (
    <div className="relative flex w-full max-w-[1440px] flex-col 1200:flex-row">
      {/* pic */}
      <div className="flex h-[352px] w-full justify-center 1200:h-full">
        {/* img carousel */}
        <div className="flex h-fit w-full max-w-[672px] gap-x-2 overflow-x-scroll rounded-lg 1200:hidden">
          {picArray.map((pic) => (
            <div
              className="h-[348px] w-60 min-w-[240px] rounded-lg bg-slate-100 bg-cover bg-center shadow"
              style={{ backgroundImage: `url(${pic})` }}
            ></div>
          ))}
        </div>
        {/* big img */}
        <div
          className="fixed top-0 left-0 bottom-0 hidden h-screen w-6/12 items-center justify-center rounded-r-[60px] bg-black bg-cover bg-center 1200:flex"
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

      {/* info */}
      <div className="flex w-full justify-center">
        <div className="flex flex-col gap-y-6 p-6 700:w-[720px] 1200:w-[480px] 1400:w-full">
          {/* first row */}
          <div className="flex gap-x-6">
            {/* basic info */}
            <div className="flex w-full flex-col">
              <span className="text-lg text-lmGrey600">Basic Information</span>
              <div className="flex h-full w-full flex-col gap-y-1 rounded-3xl bg-white p-6 shadow-md">
                {/* top */}
                <div className="flex items-center text-lmGrey600">
                  <div
                    className="fa-solid fa-location-dot mb-[3px] h-[16px] w-[16px] text-[16px]"
                    aria-hidden="true"
                  />
                  <span className="text-base">Salzbuger Straße 18</span>
                </div>
                <span className="text-2xl font-semibold text-lmGrey800 700:text-3xl 1200:text-2xl 1400:text-3xl">
                  BMW M3 E30
                </span>
                {/* prices */}
                <div className="flex w-full flex-wrap items-center gap-x-[2px] 700:hidden 1200:flex 1400:hidden">
                  <span className="text-lg text-lmPrimary">
                    30€ <span className="text-sm text-lmGrey400">/day</span>
                  </span>
                  <div className="flex items-center justify-center px-1">
                    <div className="h-1 w-1 rounded-full bg-lmGrey400"></div>
                  </div>
                  <span className="text-lg text-lmPrimary">
                    150€ <span className="text-sm text-lmGrey400">/week</span>
                  </span>
                  <div className="flex items-center justify-center px-1">
                    <div className="h-1 w-1 rounded-full bg-lmGrey400"></div>
                  </div>
                  <span className="text-lg text-lmPrimary">
                    600€ <span className="text-sm text-lmGrey400">/month</span>
                  </span>
                </div>
                {/* bio */}
                <div className="hidden h-[60px] w-full 700:flex 1200:hidden 1400:flex">
                  <span className="w-full text-sm text-lmGrey600 line-clamp-3">
                    Ipsum felis, massa quisque sit. Dis suspendisse urna ac at
                    fermentum in purus, mauris. Volutpat tempor ultrices
                    pellentesque quis bibendum massa.
                  </span>
                </div>
              </div>
            </div>
            {/* prices */}
            <div className="hidden h-full w-[176px] min-w-[176px] flex-col 700:flex 1200:hidden 1400:flex">
              <span className="text-lg text-lmGrey600">Prices</span>
              <div className="flex h-full w-full flex-col gap-y-1 rounded-3xl bg-white p-6 shadow-md">
                <span className="text-lg text-lmPrimary">
                  30€ <span className="text-sm text-lmGrey400">/day</span>
                </span>
                <span className="text-lg text-lmPrimary">
                  150€ <span className="text-sm text-lmGrey400">/week</span>
                </span>
                <span className="text-lg text-lmPrimary">
                  600€ <span className="text-sm text-lmGrey400">/month</span>
                </span>
              </div>
            </div>
          </div>
          {/* second row */}
          <div className="flex flex-col gap-6 700:flex-row 1200:flex-col 1400:flex-row">
            {/* calendar */}
            <div className="flex w-full flex-col">
              <span className="text-lg text-lmGrey600">Calendar</span>
              <div className="flex w-full flex-col items-center gap-y-1 overflow-hidden rounded-3xl bg-white shadow-md 1200:p-6 1400:p-0">
                <div className="w-full 1200:w-[360px] 1400:w-full">
                  <Calendar />
                </div>
              </div>
            </div>
            {/* location */}
            <div className="flex w-full flex-col">
              <span className="text-lg text-lmGrey600">Location</span>
              <div
                className="flex h-[256px] w-full flex-col gap-y-1 rounded-3xl bg-white bg-cover bg-center shadow-md"
                style={{ backgroundImage: `url(${GoogleMap})` }}
              />
            </div>
          </div>
          {/* car spec */}
          <div className="flex w-full max-w-[652px] flex-col">
            <span className="text-lg text-lmGrey600">Car Specification</span>
            <CarSpecWrapper amount="all" specs={carSpecData} mobile={false} />
          </div>
          {/* fourth row */}
          <div className="flex gap-x-6">
            {/* bio */}
            <div className="hidden h-full w-[176px] min-w-[176px] flex-col 700:flex 1200:hidden 1400:flex">
              <span className="text-lg text-lmGrey600">Short Bio</span>
              <div className="flex h-[242px] w-full flex-col gap-y-1 rounded-3xl bg-white p-6 shadow-md">
                <span className="w-full text-sm text-lmGrey600 line-clamp-[9]">
                  I rather take my bike or the OVP to the Uni so I don’t really
                  have a need for my cars. If you like any of my offer(s), don’t
                  be scared to send me a Message 😊.
                </span>
              </div>
            </div>
            {/* owner */}
            <div className="flex w-full flex-col">
              <span className="text-lg text-lmGrey600">Owner</span>
              <div className="rounded-3xl bg-white p-6 shadow-md dark:bg-dmGrey900">
                <UserProfileBig userData={userProfileBig} />
              </div>
            </div>
          </div>
          {/* ratings */}
          <div className="flex w-full flex-col">
            <span className="text-lg text-lmGrey600">Ratings</span>
            <div className="flex w-full flex-col gap-y-1 rounded-3xl bg-white p-6 shadow-md">
              <ReviewSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
