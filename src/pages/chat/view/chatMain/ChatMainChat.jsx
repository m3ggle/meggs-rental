import React from "react";
import { useUserContext } from "../../../../context/user/userContext";
import ChatMsg from "./ChatMsg";

const ChatMainChat = ({ messages }) => {
  const { userId } = useUserContext();

  // useRealTimeChat();

  return (
    <div className="flex w-full flex-grow flex-col-reverse gap-y-2 overflow-scroll p-6">
      {messages.map((msg) => (
        <ChatMsg
          key={msg.id}
          owner={userId === msg.user_id ? true : false}
          text={msg.content}
        />
      ))}
    </div>
  );
};

export default ChatMainChat;
