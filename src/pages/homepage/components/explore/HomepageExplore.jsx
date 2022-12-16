import React from "react";
import HomepageExploreImages from "./HomepageExploreImages";
import HomepageExploreText from "./HomepageExploreText";

const HomepageExplore = () => {
  return (
    <div
      id="explore"
      className="relative flex w-full flex-col gap-y-[120px] bg-white px-6 py-16 dark:bg-dmGrey900 700:gap-y-6 700:py-[100px] 700:px-11 1200:px-14"
    >
      <HomepageExploreText />
      <HomepageExploreImages />
    </div>
  );
};

export default HomepageExplore;
