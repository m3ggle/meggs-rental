import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigationContext } from "../context/navigation/navigationContext";

const LogoImg = () => {
  const [hideLogo, setHideLogo] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/chat/")) {
      if (location.pathname.includes("/chat/chat-main/")) {
        setHideLogo(true);
      } else {
        setHideLogo(false);
      }
    }
  }, [location]);

  const { isOpen, dispatchNavigation } = useNavigationContext();
  const openModal = () => {
    dispatchNavigation({ type: "OPEN_NAVIGATION" });
  };

  return (
    <div
      className={`fixed ${isOpen || hideLogo ? "bottom-[-120px]" : "bottom-10"}
        z-50 flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-full duration-300 hover:scale-105 active:scale-95 800:h-[92px] 800:w-[92px]`}
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
      <img
        src="https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FcarRentalLogoLm.webp?alt=media&token=e350db99-c85d-4f00-a656-ead654d96151"
        className="h-[100px] w-[100px] object-cover object-center drop-shadow-2xl"
        alt="logo"
      />
    </div>
  );
};

export default LogoImg;
