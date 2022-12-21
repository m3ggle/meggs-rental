import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../../../components/common/Btn";

const HomepageExploreText = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full flex-col gap-y-3 700:w-[615px] 1200:gap-y-6">
      <span className="text-4xl font-semibold -tracking-[1.2%] text-lmGrey800 drop-shadow dark:text-dmGrey25 700:text-[40px] 700:leading-[40px] 1200:text-5xl">
        Explore
      </span>
      <span className="w-full text-lg text-lmGrey800 drop-shadow-sm dark:text-dmGrey25 700:text-xl 1200:text-2xl">
        Explore low-cost rental cars in a catalog or on an interactive map. Find
        the best deal for you anywhere in the world.
      </span>
      <div className="flex w-full gap-x-3">
        <div className="h-fit">
          <Btn
            title="Open the Catalog"
            uiType="secondary"
            type="button"
            onClick={() => navigate("/explore/catalog")}
          />
        </div>
        <div className="h-fit">
          <Btn
            title="Open the Map"
            uiType="primary"
            type="button"
            icon="fa-solid fa-chevron-right"
            onClick={() => navigate("/explore/map")}
          />
        </div>
      </div>
    </div>
  );
};

export default HomepageExploreText;
