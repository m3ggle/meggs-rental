import React from "react";
import HomepageFooterGradient from "./HomepageFooterGradient";
import HomepageFooterMain from "./HomepageFooterMain";
import HomepageFooterMap from "./HomepageFooterMap";

const HomepageFooter = () => {
  return (
    <div className="relative flex h-[1400px] 1200:h-[1000px] w-full gap-x-3 bg-white px-6 py-16 700:px-11 700:py-[100px] 1200:px-14">
      <HomepageFooterMain />
      <HomepageFooterGradient />
      <HomepageFooterMap />
    </div>
  );
};

export default HomepageFooter;
