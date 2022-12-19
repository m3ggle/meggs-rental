import { motion } from "framer-motion";
import React from "react";
import { inViewItemVariants } from "../../../helper/HomepageAnimation";
import { FooterContent } from "./helper/FooterContent";
import HomepageFooterMainList from "./HomepageFooterMainList";

const HomepageFooterMainSecond = () => {
const { contentFooterMainSecond } = FooterContent();

  return (
    <motion.div
      variants={inViewItemVariants}
      className="flex min-w-[320px] flex-col gap-y-8 p-2 text-lg text-lmGrey800 dark:text-dmGrey25 700:flex-row 1200:flex-col"
    >
      <HomepageFooterMainList content={contentFooterMainSecond} />
    </motion.div>
  );
};

export default HomepageFooterMainSecond;
