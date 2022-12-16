import React from "react";
import HomepageFooterGradient from "./HomepageFooterGradient";
import HomepageFooterMap from "./HomepageFooterMap";
import HomepageFooterMain from "./main/HomepageFooterMain";

const HomepageFooter = ({ darkMode }) => {
  return (
    <div className="relative flex h-[1400px] w-full gap-x-3 bg-white px-6 py-16 dark:bg-dmGrey900 700:px-11 700:py-[100px] 1200:h-[1000px] 1200:px-14">
      <HomepageFooterMain />
      <HomepageFooterGradient darkMode={darkMode} />
      <HomepageFooterMap />
    </div>
  );
};

export default HomepageFooter;
