import React from "react";
import Btn from "../../../components/common/Btn";
import TabletExploreCatalog from "../../../assets/img/tabletExploreCatalog.webp"
import DesktopExploreMap from "../../../assets/img/desktopExploreMap.webp";
import { useNavigate } from "react-router-dom";

const HomepageExplore = () => {
  const navigate = useNavigate()
  
  return (
    <div
      id="explore"
      className="relative flex w-full flex-col gap-y-[120px] bg-white 1200:px-14 px-6 py-16 700:gap-y-6 700:py-[100px] 700:px-11"
    >
      <div className="flex w-full 700:w-[615px] flex-col gap-y-6">
        <span className="text-4xl 700:text-[40px] 700:leading-[40px] -tracking-[1.2%] 1200:text-5xl font-semibold text-lmGrey800 drop-shadow">
          Explore
        </span>
        <span className="w-full text-lg 700:text-xl 1200:text-2xl text-lmGrey800 drop-shadow-sm">
          Explore low-cost rental cars in a catalog or on an interactive map.
          Find the best deal for you anywhere in the world.
        </span>
        <div className="flex w-full gap-x-3">
          <div className="h-fit">
            <Btn title="Open the Catalog" uiType="secondary" type="button" />
          </div>
          <div className="h-fit">
            <Btn
              title="Open the Map"
              uiType="primary"
              type="button"
              icon="fa-solid fa-chevron-right"
            />
          </div>
        </div>
      </div>

      <img
        aria-hidden={true}
        className="h-fit w-[55%] cursor-pointer opacity-0 drop-shadow-lg duration-300 hover:scale-101 active:scale-99 900:-left-[8%]"
        src={TabletExploreCatalog}
        alt="tablet"
      />

      <img
        onClick={() => navigate("/explore/catalog")}
        className="absolute -left-[6%] bottom-[100px] h-fit w-[50%] cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99 900:-left-[8%]"
        src={TabletExploreCatalog}
        alt="tablet"
      />
      <img
        onClick={() => navigate("/explore/map")}
        className="absolute bottom-[100px] left-[45%] z-10 h-fit w-[84%] cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99"
        src={DesktopExploreMap}
        alt="desktop"
      />
    </div>
  );
};

export default HomepageExplore;
