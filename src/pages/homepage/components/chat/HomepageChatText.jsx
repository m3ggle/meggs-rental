import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../../../components/common/Btn";
import { inViewItemVariants } from "../../helper/HomepageAnimation";

const HomepageChatText = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full flex-col gap-y-3 1200:gap-y-6 px-6 700:w-[615px] 700:px-0">
      <motion.span
      variants={inViewItemVariants}
      className="text-4xl font-semibold -tracking-[1.2%] text-lmGrey800 drop-shadow dark:text-dmGrey25 700:text-[40px] 700:leading-[40px] 1200:text-5xl">
        Chat
      </motion.span>
      <motion.span
      variants={inViewItemVariants}
      className="w-full text-lg text-lmGrey800 drop-shadow-sm dark:text-dmGrey25 700:text-xl 1200:text-2xl">
        If you've discovered the appropriate Offer for you, don't be timid about
        contacting the Owner. Seal the deal and drive away after a friendly
        exchange.
      </motion.span>
      <div className="flex w-full gap-x-3">
        <motion.div
        variants={inViewItemVariants}
        className="h-fit">
          <Btn
            title="Find Offer"
            uiType="secondary"
            type="button"
            onClick={() => navigate("/explore/catalog")}
          />
        </motion.div>
        <motion.div
        variants={inViewItemVariants}
        className="h-fit">
          <Btn
            title="View your Chats"
            uiType="primary"
            type="button"
            icon="fa-solid fa-chevron-right"
            onClick={() => navigate("/chat")}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomepageChatText;
