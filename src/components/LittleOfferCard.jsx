// non responsive
// <LittleOfferCard name="Tesla Model 3" location="Salzburger Straße 18" price="100" transmission="Automatic" seats={5} />
import React from "react";

const LittleOfferCard = ({ name, location, price, transmission, seats }) => {
  // Todo: not transmission and seats as individual props but rather as object (car spec)

  return (
    <div className="relative cursor-pointer flex min-w-[300px] gap-x-3 rounded-lg bg-white shadow-md hover:shadow-lg dark:bg-dmGrey900 duration-300 hover:scale-102">
      {/* image */}
      <div
        className="h-[118px] min-w-[110px] w-[110px] rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1571987502227-9231b837d92a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80)`,
        }}
      >
        <i className="fa-solid fa-location-dot absolute left-3 top-3 hidden text-2xl text-white/40 drop-shadow"></i>
        <i className="fa-solid fa-heart absolute right-3 top-3 hidden text-2xl text-white/40 drop-shadow"></i>
      </div>

      {/* card part */}
      <div className="flex w-full flex-col gap-y-1 overflow-hidden rounded-xl py-3 dark:bg-dmGrey900">
        {/* name and location */}
        <div className="flex flex-col gap-y-1">
          {/* location */}
          <div className="flex items-center gap-x-1 text-xs text-lmGrey600 dark:text-dmGrey100">
            <i className="fa-solid fa-location-dot"></i>
            <span>{location}</span>
          </div>
          {/* name */}
          <span className="text-base font-semibold text-lmGrey700 dark:text-dmGrey25">
            {name}
          </span>
        </div>

        {/* price */}
        <span>
          <span className="text-sm text-lmPrimary dark:text-dmPrimary">
            {price}€
          </span>{" "}
          <span className="text-xs text-lmGrey400 dark:text-dmGrey100">
            /month
          </span>{" "}
        </span>

        {/* sum more info */}
        <div className="flex gap-x-4">
          <div className="flex items-center gap-x-1 text-xs text-lmGrey300 dark:text-dmGrey100">
            <i className="fa-solid fa-gears"></i>
            <span>{transmission}</span>
          </div>
          <div className="flex items-center gap-x-1 text-xs text-lmGrey300 dark:text-dmGrey100">
            <i className="fa-solid fa-chair"></i>
            <span>{seats} Seats</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LittleOfferCard;
