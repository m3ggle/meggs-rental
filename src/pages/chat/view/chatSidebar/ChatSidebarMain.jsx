import React from "react";
import { useNavigate } from "react-router-dom";
import UserProfileChat from "../../../../components/userProfile/UserProfileChat";
import { useUserContext } from "../../../../context/user/userContext";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";
import { useWindowSize } from "../../../../hooks/useWindowSize";

const ChatSidebarMain = ({ chatPreviews }) => {
  const { setSingleParam } = useUrlManipulation();

  const navigate = useNavigate();
  const windowSize = useWindowSize();
  const { userId } = useUserContext();

  const handleClick = (chatId) => {
    if (windowSize.width > 1000) {
      setSingleParam("chatId", chatId);
    } else {
      navigate(`/chat/chat-main/${chatId}`);
    }
  };

  return (
    <div className="flex w-full flex-col gap-y-2">
      {chatPreviews.map((chatPreview) => (
        <UserProfileChat
          onClick={handleClick}
          key={chatPreview.chatroom_id}
          chatId={chatPreview.chatroom_id}
          chatStatus={
            chatPreview.last_message_user_id === userId
              ? !chatPreview.is_read
              : false
          }
          lastMsg={chatPreview.last_message_content}
          displayName={
            chatPreview.owner_id === userId
              ? chatPreview.owner_user_name
              : chatPreview.borrower_user_name
          }
          profilePicture={
            chatPreview.owner_id === userId
              ? chatPreview.owner_profile_picture
              : chatPreview.borrower_profile_picture
          }
        />
      ))}
    </div>
  );
};

export default ChatSidebarMain;
