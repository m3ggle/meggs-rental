import React from "react";
import { useUserContext } from "../../../../context/user/userContext";
import ChatMessage from "./ChatMessage";

const ChatMessageThread = ({ messages }) => {
  const { userId } = useUserContext();

  // useRealTimeChat();

  return (
    <div className="flex w-full flex-grow flex-col-reverse gap-y-2 overflow-scroll p-6">
      {messages.map((msg) => (
        <ChatMessage
          key={msg.id}
          owner={userId === msg.user_id ? true : false}
          text={msg.content}
        />
      ))}
    </div>
  );
};

export default ChatMessageThread;
