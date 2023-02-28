import { motion } from "framer-motion";
import React from "react";
import ChatMessage from "../../pages/chat/view/chat/ChatMessage";

const ChatInputModalFiller = () => {
  return (
    <div className="relative flex w-full flex-grow flex-col-reverse gap-y-2 overflow-scroll py-3">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: 5.6,
        }}
      >
        <ChatMessage
          id="second"
          isOwner={false}
          text="I like my offer too ^°^. When do you need it?"
          isFirst={false}
          isRead={true}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: 1.2,
        }}
      >
        <ChatMessage
          id="first"
          isOwner={true}
          text="Hey, I really like your offer, is it available next week?"
          isFirst={false}
          isRead={true}
        />
      </motion.div>
    </div>
  );
};

export default ChatInputModalFiller;
