import Spline from "@splinetool/react-spline";
import React, { useState } from "react";
import { useNavigationContext } from "../../../../context/navigation/navigationContext";
import { smoothScroll } from "../../../../hooks/useSmoothScroll";

const HomepageNavbarLeft = () => {
  const [loadedLogo, setLoadedLogo] = useState(false);
  const handleLoad = () => setLoadedLogo(true);

  const { dispatchNavigation } = useNavigationContext();
  const openModal = () => {
    dispatchNavigation({ type: "OPEN_NAVIGATION" });
  };

  return (
    <div className="flex w-fit cursor-pointer items-center gap-x-1 700:w-60">
      <div
        onClick={openModal}
        className={`h-14 w-14 rounded-full ${
          !loadedLogo && "bg-lmPrimary dark:bg-dmPrimary"
        } duration-300 hover:scale-110 active:scale-99 drop-shadow-md`}
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
