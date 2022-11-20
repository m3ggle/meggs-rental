import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import UserProfileChat from "../../../../components/userProfile/UserProfileChat";
import ExampleData from "../../../../ExampleData";
import { useWindowSize } from "../../../../hooks/useWindowSize";

const ChatSidebarMain = () => {
  const { chatPreviews } = ExampleData();
  let [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const windowSize = useWindowSize();

  const handleClick = (chatId) => {
    if (windowSize.width > 1000) {
      searchParams.set("chatId", chatId);
      setSearchParams(searchParams);
    } else {
      navigate(`/chat/chat-main/${chatId}`);
    }
  };

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
