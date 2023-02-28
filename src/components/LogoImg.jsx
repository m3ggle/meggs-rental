import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigationContext } from "../context/navigation/navigationContext";
import { useUrlManipulation } from "../hooks/urlManipulation/useUrlManipulation";

const LogoImg = () => {
  const [hideLogo, setHideLogo] = useState(false);
  const location = useLocation();
  const { getSingleParam } = useUrlManipulation();

  useEffect(() => {
    if (location.pathname.includes("/chat")) {
      if (getSingleParam("chatId")) {
        setHideLogo(true);
        return;
      }
    }
    setHideLogo(false);
  }, [location, getSingleParam]);

  const { isOpen, dispatchNavigation } = useNavigationContext();
  const openModal = () => {
    dispatchNavigation({ type: "OPEN_NAVIGATION" });
  };

  // className={`fixed ${isOpen || hideLogo ? "bottom-[-120px]" : "bottom-10"}
  return (
    <div
      className={`fixed ${isOpen || hideLogo ? "bottom-[-60px]" : "bottom-6 800:bottom-10"}
        group z-50 flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-full duration-300 hover:scale-105 active:scale-95 800:h-[92px] 800:w-[92px]`}
      onClick={openModal}
    >
      <motion.div
        initial={{ top: "-16px", opacity: 1, scale: 1 }}
        animate={{ top: "12px", opacity: 0, scale: 0.5 }}
        transition={{
          duration: 0.3,
          delay: 10,
          ease: "easeInOut",
        }}
        className="absolute -top-3 rounded-lg bg-white/80 px-2 py-1 text-[16px] backdrop-blur-sm duration-300 dark:bg-dmGrey900/80"
      >
        <span className="text-lmGrey600 drop-shadow-lg dark:text-dmGrey25">
          Menu
        </span>
      </motion.div>
      <div className="absolute -top-3 rounded-lg bg-white/80 px-2 py-1 text-[16px] opacity-0 backdrop-blur-sm duration-300 group-hover:opacity-100 dark:bg-dmGrey900/80">
        <span className="text-lmGrey600 drop-shadow-lg dark:text-dmGrey25">
          Menu
        </span>
      </div>
      <img
        src="https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/website/logos/meggs_rental_logo.webp"
        className="h-[80px] w-[80px] object-cover object-center drop-shadow-2xl 800:h-[100px] 800:w-[100px]"
        alt="logo"
      />
    </div>
  );
};

export default LogoImg;
