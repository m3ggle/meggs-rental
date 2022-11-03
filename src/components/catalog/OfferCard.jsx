import React from 'react'

const OfferCard = ({name, location, price, transmission, seats}) => {
  // Todo: not transmission and seats as individual props but rather as object (car spec)

  return (
    <div className="relative flex h-[406px] w-[292px] justify-center rounded-xl bg-white dark:bg-dmGrey900">
      {/* image */}

      {/* card part */}
      <div className="absolute bottom-[6%] z-10 flex w-11/12 flex-col gap-y-1 overflow-hidden rounded-xl bg-white p-3 shadow-md dark:bg-dmGrey900">
        {/* name and location */}
        <div className="flex flex-col gap-y-1">
          {/* location */}
          <div className="flex items-center gap-x-1 text-base text-lmGrey600 dark:text-dmGrey100">
            <i className="fa-solid fa-location-dot"></i>
            <span>{location}</span>
          </div>
          {/* name */}
          <span className="text-xl font-semibold text-lmGrey700 dark:text-dmGrey25">
            {name}
          </span>
        </div>

        {/* price */}
        <span>
          <span className="text-lg text-lmPrimary dark:text-dmPrimary">
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

      <div
        className="absolute h-80 w-full rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1571987502227-9231b837d92a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80)`,
        }}
      >
        <i className="fa-solid fa-location-dot absolute left-6 top-6 text-[36px] text-white/40 drop-shadow"></i>
        <i className="fa-solid fa-heart absolute right-6 top-6 text-[36px] text-white/40 drop-shadow"></i>
      </div>
    </div>
  );
}

export default OfferCard