import React from "react";
import ChatMessage from "./ChatMessage";

const ChatMessageList = ({ messages = [], userId }) => {
  return (
    <>
      {messages.map((message, index) => (
        <ChatMessage
          key={message.id}
          id={message.id}
          isOwner={userId === message.user_id ? true : false}
          text={message.content}
          isFirst={index === 0}
          isRead={message.is_read}
        />
      ))}
    </>
  );
};

export default ChatMessageList;
