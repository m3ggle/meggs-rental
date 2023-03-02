import React, { useEffect, useState } from "react";
import { useGetChatInformation } from "../../../../api/supabase/useGetChatInformation";
import Loading from "../../../../components/Loading";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { useUpdateLastMessage } from "../../hooks/useUpdateLastMessage";
import ChatHeader from "./ChatHeader";
import ChatMessageComposer from "./ChatMessageComposer";
import ChatMessageThread from "./ChatMessageThread";

const Chat = () => {
  const windowSize = useWindowSize();
  const { searchParams, getSingleParam } = useUrlManipulation();

  const [chatId, setChatId] = useState(getSingleParam("chatId"));

  const { chatInformation, isLoading: chatInformationLoading } =
    useGetChatInformation(chatId);
  useUpdateLastMessage(chatInformation);

  useEffect(() => {
    setChatId(getSingleParam("chatId"));
  }, [searchParams, getSingleParam]);

  return (
    <>
      {chatInformationLoading ? (
        <div className="flex h-screen w-full items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div
          style={{ height: `${windowSize.height}px` }}
          className="flex flex-col"
        >
          <ChatHeader
            chatInformation={chatInformation}
            chatInformationLoading={chatInformationLoading}
          />
          <ChatMessageThread chatId={chatId} />
          <ChatMessageComposer />
        </div>
      )}
    </>
  );
};

export default Chat;
