import { useInView } from "framer-motion";
import React, { useRef } from "react";
import HomepageExploreImages from "./HomepageExploreImages";
import HomepageExploreText from "./HomepageExploreText";

const HomepageExplore = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
  return (
    <div
      id="explore"
      ref={ref}
      className="relative flex w-full flex-col gap-y-[64px] bg-white px-6 py-10 dark:bg-dmGrey900 700:gap-y-14 700:px-11 1200:gap-y-[80px] 1200:py-14 1200:px-14"
    >
      <HomepageExploreText isInView={isInView} />
      <HomepageExploreImages isInView={isInView} />
    </div>
  );
};

export default HomepageExplore;
