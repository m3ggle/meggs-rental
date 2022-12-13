import React from "react";
import { useNavigate } from "react-router-dom";
import DesktopExploreMap from "../../../assets/img/desktopExploreMap.webp";
import DesktopExploreMapDM from "../../../assets/img/desktopExploreMapDM.webp";
import TabletExploreCatalog from "../../../assets/img/tabletExploreCatalog.webp";
import TabletExploreCatalogDM from "../../../assets/img/tabletExploreCatalogDM.webp";
import Btn from "../../../components/common/Btn";

const HomepageExplore = ({darkMode}) => {
  const navigate = useNavigate();

  return (
    <div
      id="explore"
      className="relative flex w-full flex-col gap-y-[120px] bg-white px-6 py-16 dark:bg-dmGrey900 700:gap-y-6 700:py-[100px] 700:px-11 1200:px-14"
    >
      <div className="flex w-full flex-col gap-y-6 700:w-[615px]">
        <span className="text-4xl font-semibold -tracking-[1.2%] text-lmGrey800 drop-shadow dark:text-dmGrey25 700:text-[40px] 700:leading-[40px] 1200:text-5xl">
          Explore
        </span>
        <span className="w-full text-lg text-lmGrey800 drop-shadow-sm dark:text-dmGrey25 700:text-xl 1200:text-2xl">
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
        src={darkMode ? TabletExploreCatalogDM : TabletExploreCatalog}
        alt="tablet"
      />
      <img
        onClick={() => navigate("/explore/map")}
        className="absolute bottom-[100px] left-[45%] z-10 h-fit w-[84%] cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99"
        src={darkMode ? DesktopExploreMapDM : DesktopExploreMap}
        alt="desktop"
      />
    </div>
  );
};

export default HomepageExplore;
