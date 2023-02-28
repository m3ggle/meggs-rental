import React from "react";

const ChatInputSecondIcon = ({ error, secondIcon = "fa-solid fa-paperclip", value }) => {
  return (
    <div className="flex h-[20px] w-[14px] items-center justify-center">
      <i
        className={`${
          error ? "fa-solid fa-triangle-exclamation" : secondIcon
        } flex h-[14px] w-[14px] items-center justify-center text-[14px] ${
          error
            ? "text-red-300 dark:text-red-100"
            : value === undefined || value === ""
            ? "text-lmGrey300 dark:text-dmGrey300"
            : "text-lmGrey600 dark:text-dmGrey25"
        }  `}
      />
    </div>
  );
};

export default ChatInputSecondIcon;
