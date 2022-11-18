import Spline from "@splinetool/react-spline";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Logo = ({ isOpen, openModal }) => {
  const [hideLogo, setHideLogo] = useState(false)
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/chat/")) {
      if (location.pathname.includes("/chat/chat-main/")) {
        setHideLogo(true)
      } else {
        setHideLogo(false);
      }
    }
  }, [location]);

  return (
    <div
      className={`fixed ${
        (isOpen || hideLogo) ? "bottom-[-100px]" : "bottom-10"
      } z-50 flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-full duration-300 hover:scale-105 active:scale-95 800:h-[84px] 800:w-[84px]`}
      onClick={openModal}
    >
      <Spline scene="https://prod.spline.design/og6CZMxsQfdlo-uE/scene.splinecode" />
    </div>
  );
};

export default Logo;
