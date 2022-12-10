import React from "react";
import Btn from "../../../components/common/Btn";
import TabletExploreCatalog from "../../../assets/img/tabletExploreCatalog.webp"
import DesktopExploreMap from "../../../assets/img/desktopExploreMap.webp";
import { useNavigate } from "react-router-dom";

const HomepageExplore = () => {
  const navigate = useNavigate()
  const handleNavigation = (navigateTo) => {
    navigate(navigateTo);
  }
  
  return (
    <div
      id="explore"
      className="relative flex w-full flex-col gap-y-6 bg-white px-14 py-[100px]"
    >
      <div className="flex w-[615px] flex-col gap-y-6">
        <span className="text-5xl font-semibold text-lmGrey800 drop-shadow">
          Explore
        </span>
        <span className="w-full text-2xl text-lmGrey800 drop-shadow-sm">
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
        onClick={() => handleNavigation("/explore/catalog")}
        className="absolute -left-44 h-fit w-[700px] cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99"
        src={TabletExploreCatalog}
        alt="tablet"
      />

      {/* <div className="relative flex h-[505px] w-full max-w-full">
        <img
          onClick={() => handleNavigation("/explore/catalog")}
          className="absolute -left-44 h-fit w-[700px] cursor-pointer drop-shadow-lg hover:scale-101 duration-300 active:scale-99"
          src={TabletExploreCatalog}
          alt="tablet"
        />
        <img
          onClick={() => handleNavigation("/explore/map")}
          className="absolute bottom-0 -right-[400px] h-fit w-[1200px] cursor-pointer drop-shadow-lg hover:scale-101 duration-300 active:scale-99"
          src={DesktopExploreMap}
          alt="desktop"
        />
      </div> */}
    </div>
  );
};

export default HomepageExplore;
