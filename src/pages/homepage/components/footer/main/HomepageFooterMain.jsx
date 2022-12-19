import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { useWindowSize } from "../../../../../hooks/useWindowSize";
import { inViewContainerVariants } from "../../../helper/HomepageAnimation";
import HomepageFooterMainFirst from "./HomepageFooterMainFirst";
import HomepageFooterMainSecond from "./HomepageFooterMainSecond";
import HomepageFooterMainThird from "./HomepageFooterMainThird";

const HomepageFooterMain = () => {
    const windowSize = useWindowSize();

    const footerRef = useRef(null);
    const isInView = useInView(footerRef, {
      once: true,
      margin:
        windowSize.width > 1200 ? "100px 0px -100px 0px" : "44px 0px -44px 0px",
    });

  return (
    <motion.div
      ref={footerRef}
      initial="initial"
      animate={isInView && "animate"}
      transition="transition"
      variants={inViewContainerVariants}
      className="z-20 h-fit w-full px-0 1200:px-14"
    >
      <div className="flex h-fit w-full flex-col gap-6 rounded-[30px] bg-white p-6 shadow-lg dark:bg-dmGrey900 700:p-10 1200:flex-row 1200:p-6">
        {/* first col */}
        <HomepageFooterMainFirst />

        {/* second col */}
        <HomepageFooterMainSecond />

        {/* third col */}
        <HomepageFooterMainThird />
      </div>
    </motion.div>
  );
};

export default HomepageFooterMain;
