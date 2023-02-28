import React from 'react'

const ChatInputFirstIcon = ({firstIcon, error, value}) => {
  return (
    <div className="flex h-full w-[14px] items-center justify-center">
      <i
        className={`${firstIcon} flex h-[14px] w-[14px] items-center justify-center text-[14px] ${
          error
            ? "text-red-300 dark:text-red-100"
            : value === undefined || value === ""
            ? "text-lmGrey300 dark:text-dmGrey300"
            : "text-lmGrey600 dark:text-dmGrey25"
        }  `}
      />
    </div>
  );
}

export default ChatInputFirstIcon