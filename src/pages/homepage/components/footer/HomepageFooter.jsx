import React from "react";
import HomepageFooterGradient from "./HomepageFooterGradient";
import HomepageFooterMain from "./HomepageFooterMain";
import HomepageFooterMap from "./HomepageFooterMap";

const HomepageFooter = () => {
  return (
    <div className="relative flex w-full h-[1000px] gap-x-3 bg-white px-14 py-[100px]">
      <HomepageFooterMain />
      <HomepageFooterGradient />
      <HomepageFooterMap />
    </div>
  );
};

export default HomepageFooter;
