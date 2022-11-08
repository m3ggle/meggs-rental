import React from 'react'
import Spline from "@splinetool/react-spline";

const Logo = ({isOpen, openModal}) => {
  return (
    <div
      className={`fixed ${
        isOpen ? "bottom-[-100px]" : "bottom-10"
      } z-50 flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-full duration-300 hover:scale-105 active:scale-95 800:h-[84px] 800:w-[84px]`}
      onClick={openModal}
    >
      <Spline scene="https://prod.spline.design/og6CZMxsQfdlo-uE/scene.splinecode" />
    </div>
  );
}

export default Logo