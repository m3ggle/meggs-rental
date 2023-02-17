import React, { useEffect } from "react";
import { useGetChatInformation } from "../../../../api/supabase/useGetChatInformation";
import { useGetChatMessages } from "../../../../api/supabase/useGetChatMessages";
import { useUserContext } from "../../../../context/user/userContext";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { useUpdateLastMessage } from "../../hooks/useUpdateLastMessage";
import ChatMainChat from "./ChatMainChat";
import ChatMainHeader from "./ChatMainHeader";
import ChatMainInputArea from "./ChatMainInputArea";

const ChatMain = () => {
  const {userId} = useUserContext()
  const { getSingleParam } = useUrlManipulation();
  const chatId = getSingleParam("chatId");

  const { chatMessages } = useGetChatMessages({ chatId });
  const { chatInformation, isLoading: chatInformationLoading } =
    useGetChatInformation(chatId);
  
    useUpdateLastMessage(chatInformation);

  const windowSize = useWindowSize();
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
          <ChatMainHeader
            chatInformation={chatInformation}
            chatInformationLoading={chatInformationLoading}
          />
          <ChatMainChat messages={chatMessages} />
          <ChatMainInputArea />
        </>
      )}
    </div>
  );
};

export default ChatMain;
