import React from "react";
import HomepageNavbarLeft from "./HomepageNavbarLeft";
import HomepageNavbarMiddle from "./HomepageNavbarMiddle";
import HomepageNavbarRight from "./HomepageNavbarRight";

const HomepageNavbar = () => {
  return (
    <div className="fixed -top-1 left-auto z-40 flex h-fit w-full max-w-[1440px] items-center justify-between border-b-2 border-lmGrey100/50 bg-white/80 py-3 px-6 backdrop-blur-lg dark:border-dmGrey800/10 dark:bg-dmGrey900/80 700:px-11 1200:px-14">
      {/* logo */}
      <HomepageNavbarLeft />

      {/* links */}
      <HomepageNavbarMiddle />

      {/* user */}
      <HomepageNavbarRight />
    </div>
  );
};

export default HomepageNavbar;
