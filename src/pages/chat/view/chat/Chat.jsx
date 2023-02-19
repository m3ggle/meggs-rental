import React from "react";
import { useGetChatInformation } from "../../../../api/supabase/useGetChatInformation";
import Loading from "../../../../components/Loading";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";
import { useUpdateLastMessage } from "../../hooks/useUpdateLastMessage";
import ChatHeader from "./ChatHeader";
import ChatMessageComposer from "./ChatMessageComposer";
import ChatMessageThread from "./ChatMessageThread";

const Chat = () => {
  const { getSingleParam } = useUrlManipulation();
  const chatId = getSingleParam("chatId");

  const { chatInformation, isLoading: chatInformationLoading } =
    useGetChatInformation(chatId);

  useUpdateLastMessage(chatInformation);

  return (
    <>
      {chatInformationLoading ? (
        <div className="flex h-screen w-full items-center justify-center">
          <Loading />
        </div>
      ) : (
        <>
          <ChatHeader
            chatInformation={chatInformation}
            chatInformationLoading={chatInformationLoading}
          />
          <ChatMessageThread chatId={chatId} />
          <ChatMessageComposer />
        </>
      )}
    </>
  );
};

export default Chat;
