import React from "react";
import { useGetChatMessages } from "../../../../api/supabase/useGetChatMessages";
import Loading from "../../../../components/Loading";
import { useUserContext } from "../../../../context/user/userContext";
import { useRealTimeChat } from "../../hooks/useRealTimeChat";
import ChatMessageList from "./ChatMessageList";

const ChatMessageThread = ({ chatId }) => {
  const { userId } = useUserContext();

  // get all messages
  const { messages, isLoading, setMessages } = useGetChatMessages({ chatId });
  // when new message, insert it into messages state
  useRealTimeChat({ setMessages, chatId, userId });

  return (
    <>
      {isLoading ? (
        <div className="justify-content flex h-screen w-full items-center">
          <Loading />
        </div>
      ) : (
        <div className="flex w-full flex-grow flex-col-reverse gap-y-2 overflow-scroll p-6">
          <ChatMessageList messages={messages} userId={userId} />
        </div>
      )}
    </>
  );
};

export default ChatMessageThread;
