import React from "react";
import styles from "../../../../style";

const ChatMessage = ({ owner, text }) => {
  return (
    <div
      className={`${owner ? "justify-end" : "justify-start"} flex h-fit w-full`}
    >
      <div
        className={`${
          owner
            ? "bg-lmPrimary text-white dark:bg-dmPrimary"
            : `${styles.darkModeBorder} bg-lmGrey25 text-lmGrey600 dark:bg-dmGrey900 dark: dark:text-dmGrey100`
        } w-fit max-w-[90%] rounded-lg p-4 text-sm 600:max-w-[640px]`}
      >
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;
