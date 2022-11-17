// <OfferCard name="Tesla Model 3" location="Salzburger Straße 18" price="100" transmission="Automatic" seats={5} />
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../style";

const OfferCard = ({ offerInformation, index }) => {
  const {name, location, price, carSpecs, liked, photoUrl} = offerInformation
  const navigate = useNavigate();
  const handleClick = () => navigate("/offer-details");

  return (
    <motion.div
      initial={{ opacity: 0, translateY: -24 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        opacity: { delay: index * 0.2 },
        translateY: { delay: index * 0.2 },
        scale: { ease: "easeInOut" },
      }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="relative flex w-full min-w-[312px] cursor-pointer gap-x-3 rounded-lg bg-white shadow-md dark:bg-dmGrey900 500:h-[252px] 500:w-[180px] 500:min-w-0 500:justify-center 500:gap-x-0 500:rounded-xl 500:shadow-none 1400:h-[406px] 1400:w-[292px]"
    >
      {/* image */}
      <div
        onClick={handleClick}
        className="h-full min-w-[110px] rounded-lg bg-cover bg-center 500:absolute 500:top-0 500:left-0 500:h-[200px] 500:w-full 500:rounded-xl 1400:h-80"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1571987502227-9231b837d92a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80)`,
          // backgroundImage: `url(${photoUrl[0]})`,
        }}
      ></div>
      <i className="fa-solid fa-location-dot absolute left-3 top-3 hidden text-2xl text-white/40 drop-shadow duration-300 hover:text-lmPrimary/50 focus:text-lmPrimary 500:flex 1400:left-6 1400:top-6 1400:text-[36px]" />
      <i
        className={`fa-solid fa-heart ${
          liked ? "text-red-500" : "text-white/40"
        } absolute right-3 top-3 hidden text-2xl drop-shadow duration-300 hover:text-red-400 500:flex 1400:right-6 1400:top-6 1400:text-[36px]`}
      />
      {/* card part */}
      <div
        onClick={handleClick}
        className={`${styles.darkModeBorder} flex w-full flex-col gap-y-1 overflow-hidden rounded-xl py-3 dark:bg-dmGrey900 500:absolute 500:bottom-[2%] 500:z-10 500:w-11/12 500:gap-y-0 500:bg-white 500:p-3 500:shadow-md 1400:bottom-[6%] 1400:gap-y-1`}
      >
        {/* name and location */}
        <div className="flex flex-col gap-y-1">
          {/* location */}
          <div className="flex items-center gap-x-1 text-xs text-lmGrey600 dark:text-dmGrey100 1400:text-base">
            <i className="fa-solid fa-location-dot"></i>
            <span className="w-full truncate">{location.formatted}</span>
          </div>
          {/* name */}
          <span className="w-full truncate text-base font-semibold text-lmGrey700 dark:text-dmGrey25 1400:text-xl">
            {name}
          </span>
        </div>

        {/* price */}
        <div className="flex w-full items-center gap-x-[2px] truncate ">
          <span className="text-lg text-lmPrimary dark:text-dmPrimary">
            {price.day}{" "}
            <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
              /day
            </span>
          </span>
          <div className="flex items-center justify-center px-1">
            <div className="h-1 w-1 rounded-full bg-lmGrey400"></div>
          </div>
          <span className="text-lg text-lmPrimary dark:text-dmPrimary">
            {price.week}{" "}
            <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
              /week
            </span>
          </span>
          <div className="hidden items-center justify-center px-1">
            <div className="h-1 w-1 rounded-full bg-lmGrey400"></div>
          </div>
          <span className="hidden text-lg text-lmPrimary dark:text-dmPrimary">
            {price.month}{" "}
            <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
              /month
            </span>
          </span>
        </div>

        {/* sum more info */}
        <div className="flex gap-x-4 500:hidden 1400:flex">
          <div className="flex items-center gap-x-1 text-xs text-lmGrey300 dark:text-dmGrey100">
            <i className="fa-solid fa-gears"></i>
            <span>{carSpecs.transmission}</span>
          </div>
          <div className="flex items-center gap-x-1 text-xs text-lmGrey300 dark:text-dmGrey100">
            <i className="fa-solid fa-chair"></i>
            <span>{carSpecs.seats} Seats</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OfferCard;
