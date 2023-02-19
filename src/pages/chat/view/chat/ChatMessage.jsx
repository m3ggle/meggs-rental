import React from "react";
import styles from "../../../../style";

const ChatMessage = ({ isOwner = false, text = "", isFirst = false, isRead }) => {
  return (
    <div
      className={`${
        isOwner ? "justify-end" : "justify-start"
      } flex h-fit w-full`}
    >
      <div className="flex h-fit w-fit flex-col gap-y-2">
        <div
          className={`${
            isOwner
              ? "bg-lmPrimary text-white dark:bg-dmPrimary"
              : `${styles.darkModeBorder} dark: bg-lmGrey25 text-lmGrey600 dark:bg-dmGrey900 dark:text-dmGrey100`
          } w-fit max-w-[90%] rounded-lg p-4 text-sm 600:max-w-[640px]`}
        >
          {text}
        </div>
        {isFirst && <span className={`text-lmGrey300 text-sm ${isOwner ? "text-right pr-2" : "text-left pl-2"}`}>{isRead ? "Read " : "Unread"}</span>}
      </div>
    </div>
  );
};

export default ChatMessage;
