import Spline from "@splinetool/react-spline";
import React, { useState } from "react";
import { smoothScroll } from "../../../../hooks/useSmoothScroll";

const HomepageNavbarLeft = ({ openModal }) => {
  const [loadedLogo, setLoadedLogo] = useState(false);
  const handleLoad = () => setLoadedLogo(true);

  return (
    <div className="flex w-fit cursor-pointer items-center gap-x-1 700:w-60">
      <div
        onClick={openModal}
        className={`h-14 w-14 rounded-full ${
          !loadedLogo && "bg-lmPrimary dark:bg-dmPrimary"
        } duration-300`}
      >
        <Spline
          onLoad={handleLoad}
          className="z-10"
          scene="https://prod.spline.design/og6CZMxsQfdlo-uE/scene.splinecode"
        />
      </div>
      <span
        onClick={() => smoothScroll("hero")}
        className="text-lg text-lmGrey800 dark:text-dmGrey25"
      >
        Meggs Rental
      </span>
    </div>
  );
};

export default HomepageNavbarLeft;
