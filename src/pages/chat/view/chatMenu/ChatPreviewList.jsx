import React from "react";
import { useNavigate } from "react-router-dom";
import { useNavigationContext } from "../../../../context/navigation/navigationContext";
import { useUserContext } from "../../../../context/user/userContext";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";
import { useNavigateToChat } from "../../../../hooks/useNavigateToChat";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import ChatPreview from "./ChatPreview";

const ChatPreviewList = ({ chatPreviews }) => {
  const { setArrayOfParams } = useUrlManipulation();
  const { isOpen, dispatchNavigation } = useNavigationContext();

  const navigate = useNavigate();
  const windowSize = useWindowSize();
  const { userId } = useUserContext();
  const {navigateToChat} = useNavigateToChat();

  const handleClick = (chatId, offerId) => {
    if (isOpen) {
      navigateToChat({chatroomId: chatId, offerId})
      dispatchNavigation({ type: "CLOSE_NAVIGATION" });
      return
    }
    
    if (windowSize.width > 1000) {
      setArrayOfParams({
        chatId,
        offerId,
      });
    } else {
      navigate(`/chat/mobile?chatId=${chatId}&offerId=${offerId}`);
    }
  };

  return (
    <div className="flex w-full flex-col gap-y-2">
      {chatPreviews.map((chatPreview) => (
        <ChatPreview
          onClick={() =>
            handleClick(chatPreview.chatroom_id, chatPreview.offer_id)
          }
          key={chatPreview.chatroom_id}
          chatId={chatPreview.chatroom_id}
          lastMsgRead={chatPreview.is_read_by.includes(userId)}
          lastMsg={chatPreview.last_message_content}
          displayName={
            chatPreview.owner_id === userId
              ? chatPreview.borrower.user_name
              : chatPreview.owner.user_name
          }
          profilePicture={
            chatPreview.owner_id === userId
              ? chatPreview.borrower.profile_picture_url
              : chatPreview.owner.profile_picture_url
          }
        />
      ))}
    </div>
  );
};

export default ChatPreviewList;
