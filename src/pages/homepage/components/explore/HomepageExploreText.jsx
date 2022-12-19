import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../../../components/common/Btn";
import { inViewItemVariants } from "../../helper/HomepageAnimation";

const HomepageExploreText = () => {
  const navigate = useNavigate();

  return (
    <motion.div className="flex w-full flex-col gap-y-3 700:w-[615px] 1200:gap-y-6">
      <motion.span
        variants={inViewItemVariants}
        className="text-4xl font-semibold -tracking-[1.2%] text-lmGrey800 drop-shadow dark:text-dmGrey25 700:text-[40px] 700:leading-[40px] 1200:text-5xl"
      >
        Explore
      </motion.span>
      <motion.span
        variants={inViewItemVariants}
        className="w-full text-lg text-lmGrey800 drop-shadow-sm dark:text-dmGrey25 700:text-xl 1200:text-2xl"
      >
        Explore low-cost rental cars in a catalog or on an interactive map. Find
        the best deal for you anywhere in the world.
      </motion.span>
      <div className="flex w-full gap-x-3">
        <motion.div variants={inViewItemVariants} className="h-fit">
          <Btn
            title="Open the Catalog"
            uiType="secondary"
            type="button"
            onClick={() => navigate("/explore/catalog")}
          />
        </motion.div>
        <motion.div variants={inViewItemVariants} className="h-fit">
          <Btn
            title="Open the Map"
            uiType="primary"
            type="button"
            icon="fa-solid fa-chevron-right"
            onClick={() => navigate("/explore/map")}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomepageExploreText;
