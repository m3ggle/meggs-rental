import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { inViewContainerVariants } from "../helper/HomepageAnimation";
import HomepageChatImages from "./chat/HomepageChatImages";
import HomepageChatText from "./chat/HomepageChatText";

const HomepageChat = () => {
  const windowSize = useWindowSize();  
  const chatRef = useRef(null);
    const isInView = useInView(chatRef, {
      once: true,
      margin:
        windowSize.width > 1200 ? "100px 0px -100px 0px" : "44px 0px -44px 0px",
    });
  
  return (
    <motion.div
      id="chat"
      ref={chatRef}
      initial="initial"
      animate={isInView && "animate"}
      transition="transition"
      variants={inViewContainerVariants}
      className="relative flex w-full flex-col gap-y-6 bg-white py-10 dark:bg-dmGrey900 700:px-11 1200:py-14 1200:px-14"
    >
      <HomepageChatText />
      <HomepageChatImages />
    </motion.div>
  );
};

export default HomepageChat;
