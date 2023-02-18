import React from "react";
import { useGetChatMessages } from "../../../../api/supabase/useGetChatMessages";
import Loading from "../../../../components/Loading";
import { useUserContext } from "../../../../context/user/userContext";
import { useChatRealTime } from "../../hooks/useChatRealTime";
import ChatMessage from "./ChatMessage";

const ChatMessageThread = ({ chatId }) => {
  const { userId } = useUserContext();

  // get all messages
  const { messages, isLoading, setMessages } = useGetChatMessages({ chatId });
  // when new message, insert it into messages state
  useChatRealTime({ setMessages, chatId });

  return (
    <>
      {isLoading ? (
        <div className="justify-content flex h-screen w-full items-center">
          <Loading />
        </div>
      ) : (
        <div className="flex w-full flex-grow flex-col-reverse gap-y-2 overflow-scroll p-6">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              owner={userId === message.user_id ? true : false}
              text={message.content}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ChatMessageThread;
