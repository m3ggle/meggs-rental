import React from "react";
import { useGetChatMessages } from "../../../../api/supabase/useGetChatMessages";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import ChatMainChat from "./ChatMainChat";
import ChatMainHeader from "./ChatMainHeader";
import ChatMainInputArea from "./ChatMainInputArea";

const ChatMain = () => {
  const windowSize = useWindowSize();
  const { getSingleParam } = useUrlManipulation();
  const chatId = getSingleParam("chatId");

  const { chatMessages } = useGetChatMessages({ chatId });

  // get chatinfo

  return (
    <div
      style={{ height: `${windowSize.height}px` }}
      className="flex min-w-[360px] max-w-[720px] flex-col gap-y-2 1000:w-full 1000:min-w-0 1000:max-w-none"
    >
      {chatId === null ? (
        <div className="flex h-screen w-full items-center justify-center">
          <span className="text-xs text-lmGrey800 dark:text-dmGrey100">
            No chat has been selected
          </span>
        </div>
      ) : (
        <>
          <ChatMainHeader />
          <ChatMainChat messages={chatMessages} />
          <ChatMainInputArea />
        </>
      )}
    </div>
  );
};

export default ChatMain;
