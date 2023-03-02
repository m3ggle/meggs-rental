import React from "react";
import supabase from "../../../../config/supabaseClient";
import styles from "../../../../style";
import { useRealTimeMessageStatus } from "../../hooks/useRealTimeMessageStatus";

const ChatMessage = ({
  id,
  isOwner = false,
  text = "",
  isFirst = false,
  isRead = false,
}) => {
  const { isReadState } = useRealTimeMessageStatus({ id, isFirst, isRead });

  return (
    <div
      className={`${
        isOwner ? "justify-end" : "justify-start"
      } flex h-fit w-full`}
    >
      <div
        className={`${
          isOwner
            ? "bg-gradient-to-r from-[#0180FE] to-[#2591FE] text-white"
            : `${styles.darkModeBorder} dark: bg-lmGrey25 text-lmGrey600 dark:bg-dmGrey900 dark:text-dmGrey100`
        } relative w-fit max-w-[90%] rounded-lg p-4 text-sm 600:max-w-[640px]`}
      >
        {text}
        {isFirst && (
          <span
            className={`absolute -bottom-1 flex h-[18px] w-[18px] items-center justify-center overflow-visible rounded-full text-lg ${
              isOwner ? "-left-1" : "-right-2"
            }`}
          >
            {isReadState ? "🐵" : "🙈"}
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
