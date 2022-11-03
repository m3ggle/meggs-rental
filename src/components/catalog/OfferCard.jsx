import React from 'react'

const OfferCard = ({name, location, price, transmission, seats}) => {
  // Todo: not transmission and seats as individual props but rather as object (car spec)

  return (
    <div className="relative flex min-w-[312px]  gap-x-3 rounded-lg bg-white shadow-md dark:bg-dmGrey900 500:h-[252px] 500:w-[180px] 500:min-w-0 500:justify-center 500:gap-x-0 500:rounded-xl 500:shadow-none 1400:h-[406px] 1400:w-[292px]">
      {/* image */}
      <div
        className="h-full min-w-[110px] rounded-lg bg-cover bg-center 500:absolute 500:top-0 500:left-0 500:h-[200px] 500:w-full 500:rounded-xl 1400:h-80"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1571987502227-9231b837d92a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80)`,
        }}
      >
        <i className="fa-solid fa-location-dot absolute left-3 top-3 hidden text-2xl text-white/40 drop-shadow 500:flex 1400:left-6 1400:top-6 1400:text-[36px]"></i>
        <i className="fa-solid fa-heart absolute right-3 top-3 hidden text-2xl text-white/40 drop-shadow 500:flex 1400:right-6 1400:top-6 1400:text-[36px]"></i>
      </div>

      {/* card part */}
      <div className="flex w-full flex-col gap-y-1 overflow-hidden rounded-xl py-3 dark:bg-dmGrey900 500:absolute 500:bottom-[2%] 500:z-10 500:w-11/12 500:gap-y-0 500:bg-white 500:p-3 500:shadow-md 1400:bottom-[6%] 1400:gap-y-1">
        {/* name and location */}
        <div className="flex flex-col gap-y-1">
          {/* location */}
          <div className="flex items-center gap-x-1 text-xs text-lmGrey600 dark:text-dmGrey100 1400:text-base">
            <i className="fa-solid fa-location-dot"></i>
            <span>{location}</span>
          </div>
          {/* name */}
          <span className="text-base font-semibold text-lmGrey700 dark:text-dmGrey25 1400:text-xl">
            {name}
          </span>
        </div>

        {/* price */}
        <span>
          <span className="text-sm text-lmPrimary dark:text-dmPrimary 1400:text-lg">
            {price}€
          </span>{" "}
          <span className="text-xs text-lmGrey400 dark:text-dmGrey100">
            /month
          </span>{" "}
        </span>

        {/* sum more info */}
        <div className="flex gap-x-4 500:hidden 1400:flex">
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
}

export default OfferCard