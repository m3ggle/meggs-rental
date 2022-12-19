import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { inViewContainerVariants } from "../../helper/HomepageAnimation";
import HomepageExploreImages from "./HomepageExploreImages";
import HomepageExploreText from "./HomepageExploreText";

const HomepageExplore = () => {
  const windowSize = useWindowSize();

  const exploreRef = useRef(null);
  const isInView = useInView(exploreRef, {
    once: true,
    margin:
      windowSize.width > 1200 ? "100px 0px -100px 0px" : "44px 0px -44px 0px",
  });

  return (
    <motion.div
      id="explore"
      ref={exploreRef}
      initial="initial"
      animate={isInView && "animate"}
      transition="transition"
      variants={inViewContainerVariants}
      className="relative flex w-full flex-col gap-y-[64px] bg-white px-6 py-10 dark:bg-dmGrey900 700:gap-y-14 700:px-11 1200:gap-y-[80px] 1200:py-14 1200:px-14"
    >
      <HomepageExploreText />
      <HomepageExploreImages />
    </motion.div>
  );
};

export default HomepageExplore;
