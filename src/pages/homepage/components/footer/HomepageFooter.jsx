import React from "react";
import HomepageFooterMain from "./HomepageFooterMain";
import HomepageFooterMap from "./HomepageFooterMap";

const HomepageFooter = () => {
  return (
    <div className="flex w-full gap-x-3 bg-white px-14 py-[100px]">
      <HomepageFooterMain />
      <HomepageFooterMap />
    </div>
  );
};

export default HomepageFooter;
