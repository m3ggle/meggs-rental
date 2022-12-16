import React from "react";
import HomepageFooterMainFirst from "./HomepageFooterMainFirst";
import HomepageFooterMainSecond from "./HomepageFooterMainSecond";
import HomepageFooterMainThird from "./HomepageFooterMainThird";

const HomepageFooterMain = () => {
  return (
    <div className="z-20 h-fit w-full px-0 1200:px-14">
      <div className="flex h-fit w-full flex-col gap-6 rounded-[30px] bg-white p-6 shadow-lg dark:bg-dmGrey900 700:p-10 1200:flex-row 1200:p-6">
        {/* first col */}
        <HomepageFooterMainFirst />

        {/* second col */}
        <HomepageFooterMainSecond />

        {/* third col */}
        <HomepageFooterMainThird />
      </div>
    </div>
  );
};

export default HomepageFooterMain;
