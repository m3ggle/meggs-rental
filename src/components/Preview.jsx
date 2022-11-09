import React from "react";
import { Link } from "react-router-dom";
import Bmw1 from "../assets/img/bmw1.jpg";
import Bmw2 from "../assets/img/bmw2.jpg";
import Bmw3 from "../assets/img/bmw3.jpg";
import Bmw4 from "../assets/img/bmw4.jpg";
import Bmw5 from "../assets/img/bmw5.jpg";
import ExampleData from "../ExampleData";
import Calendar from "./offerDetails/Calendar";
import CarSpecWrapper from "./offerDetails/CarSpecWrapper";
import UserProfileSmall from "./userProfile/UserProfileSmall";

const picArray = [Bmw1, Bmw2, Bmw3, Bmw4, Bmw5];
const { carSpecData} = ExampleData()

const Preview = () => {
  return (
    <div className="relative flex h-fit w-[360px] flex-col gap-y-2 rounded-2xl p-6 shadow">
      {/* icons */}
      <div className="absolute  top-5 right-[22px] flex h-fit w-fit flex-col items-center justify-center text-[20px]">
        <div className="fa-solid fa-times flex h-8 w-8 items-center justify-center text-lmGrey600"></div>
        <div className="fa-solid fa-heart flex h-8 w-8 items-center justify-center text-[18px] text-lmGrey300"></div>
      </div>

      {/* header */}
      <div className="flex flex-col gap-y-1">
        <div className="flex items-center text-lmGrey600">
          <div
            className="fa-solid fa-location-dot mb-[3px] h-[14px] w-[14px] text-[14px]"
            aria-hidden="true"
          />
          <span className="text-sm">Salzbuger Straße 18</span>
        </div>
        <span className="text-xl text-lmGrey800">BMW M3 E30</span>
        <span className="text-lg text-lmPrimary">
          600€ <span className="text-sm text-lmGrey400">/month</span>
        </span>
      </div>
      {/* img carousel */}
      <div className="flex h-fit w-full gap-x-2 overflow-x-scroll rounded-lg">
        {picArray.map((pic, index) => (
          <div
            key={index}
            className="h-[220px] w-40 min-w-[160px] rounded-lg bg-slate-100 bg-cover bg-center shadow"
            style={{ backgroundImage: `url(${pic})` }}
          ></div>
        ))}
      </div>
      {/* calendar */}
      <Calendar shadow={true} header={true} />
      {/* car specs */}
      <CarSpecWrapper amount="preview" specs={carSpecData} mobile={false} />
      {/* profile */}
      <div className="flex items-center py-2 px-1">
        <UserProfileSmall
          review={true}
          rating="4"
          text="Click to view the owners account"
          displayName="Meggle Bande"
          profilePic="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2264&q=80"
        />
      </div>
      {/* btns */}
      <div className="flex w-full gap-x-2 ">
        <Link
          to="/offer-details"
          className="flex w-full items-center justify-center rounded-lg bg-primary100 py-3 px-4 text-sm font-semibold text-lmPrimary"
        >
          View full Offer
        </Link>
        <Link
          to="/chat"
          className="flex w-full items-center justify-center rounded-lg bg-lmPrimary py-3 px-4 text-sm font-semibold text-white shadow-lg"
        >
          Contact Owner
        </Link>
      </div>
    </div>
  );
};

export default Preview;
