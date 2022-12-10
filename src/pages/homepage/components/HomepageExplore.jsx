import React from "react";
import Btn from "../../../components/common/Btn";
import TabletExploreCatalog from "../../../assets/img/tabletExploreCatalog.webp"
import DesktopExploreMap from "../../../assets/img/desktopExploreMap.webp";

const HomepageExplore = () => {
  return (
    <div
      id="explore"
      className="flex w-full flex-col gap-y-6 bg-white px-14 py-[100px]">
      <div className="flex w-[615px] flex-col gap-y-6">
        <span className="text-5xl font-semibold text-lmGrey800">Explore</span>
        <span className="w-full text-2xl text-lmGrey800">
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
      <div className="relative flex h-[505px] w-full max-w-full">
        <img
          className="h-fit w-[700px] absolute -left-44"
          src={TabletExploreCatalog}
          alt="tablet"
        />
        <img
          className="h-fit w-[1200px] absolute bottom-0 -right-[400px]"
          src={DesktopExploreMap}
          alt="desktop"
        />
      </div>
    </div>
  );
};

export default HomepageExplore;
