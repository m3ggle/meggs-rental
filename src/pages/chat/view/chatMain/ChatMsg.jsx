import React from "react";

const ChatMsg = ({ owner, text }) => {
  return (
    <div className={`${owner ? "justify-end" : "justify-start"} flex h-fit w-full`}>
      <div
        className={`${
          owner ? "bg-lmPrimary text-white" : "bg-lmGrey25 text-lmGrey600"
        } w-fit max-w-[90%] 600:max-w-[640px] rounded-lg p-4 text-sm`}
      >
        {text}
      </div>
    </div>
  );
};

export default ChatMsg;
