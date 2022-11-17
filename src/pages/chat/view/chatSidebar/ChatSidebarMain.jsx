import React from "react";
import { useSearchParams } from "react-router-dom";
import UserProfileChat from "../../../../components/userProfile/UserProfileChat";
import ExampleData from "../../../../ExampleData";

const ChatSidebarMain = () => {
  const { chatPreviews } = ExampleData()
  let [searchParams, setSearchParams] = useSearchParams();
  
  const handleClick = (chatId) => {
    searchParams.set("chatId", chatId)
    setSearchParams(searchParams)
  }

  return (
    <div className="flex w-full flex-col gap-y-2">
      {chatPreviews.map((chatPreview) => (
        <UserProfileChat
          onClick={handleClick}
          key={chatPreview.chatId}
          chatId={chatPreview.chatId}
          newMsg={chatPreview.newMsg}
          lastMsg={chatPreview.lastMsg}
          displayName={chatPreview.displayName}
          photoUrl={chatPreview.photoUrl}
        />
      ))}
    </div>
  );
};

export default ChatSidebarMain;
