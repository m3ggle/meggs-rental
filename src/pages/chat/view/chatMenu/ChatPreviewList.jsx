import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../../context/user/userContext";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import ChatPreview from "./ChatPreview";

const ChatPreviewList = ({ chatPreviews }) => {
  const { setSingleParam, setArrayOfParams } = useUrlManipulation();

  const navigate = useNavigate();
  const windowSize = useWindowSize();
  const { userId } = useUserContext();

  const handleClick = (chatId, offerId) => {
    if (windowSize.width > 1000) {
      setSingleParam("chatId", chatId);
      setArrayOfParams({
        chatId,
        offerId,
      });
    } else {
      navigate(`/chat/chat-main/${chatId}`);
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
              ? chatPreview.borrower_user_name
              : chatPreview.owner_user_name
          }
          profilePicture={
            chatPreview.owner_id === userId
              ? chatPreview.borrower_profile_picture_url
              : chatPreview.owner_profile_picture_url
          }
        />
      ))}
    </div>
  );
};

export default ChatPreviewList;