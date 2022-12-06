import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Logo = ({ isOpen, openModal }) => {
  const [loadedLogo, setLoadedLogo] = useState(false);
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

  const handleLoad = () => setLoadedLogo(true);

  return (
    <div
      className={`fixed ${isOpen || hideLogo ? "bottom-[-100px]" : "bottom-10"}
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
        // transition={{
        //   type: "tween",
        //   repeat: Infinity,
        //   duration: 0.3,
        //   repeatType: "reverse",
        //   repeatDelay: 10,
        //   delay: 10,
        //   ease: "easeInOut",
        // }}
        // variants={labelVariant}
        // custom={loadedLogo}
        className="absolute -top-3 rounded-lg bg-white/80 dark:bg-dmGrey900/80 px-2 py-1 text-[16px] backdrop-blur-sm duration-300"
      >
        <span className="text-lmGrey600 drop-shadow-lg dark:text-dmGrey25">
          Menu
        </span>
      </motion.div>
      <Spline
        onLoad={handleLoad}
        className="z-10"
        scene="https://prod.spline.design/og6CZMxsQfdlo-uE/scene.splinecode"
      />
      <div className="z-10 h-[60px] w-[60px] rounded-full bg-lmPrimary" />
    </div>
  );
};

export default Logo;
