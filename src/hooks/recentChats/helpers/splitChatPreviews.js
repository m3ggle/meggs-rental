export const splitChatPreviews = ({ recentChats, chatroomId }) => {
  let specificChat = recentChats.filter(
    (preview) => preview.chatroom_id === chatroomId
  )[0];

  // get all chat previews which are not the one in question
  let restChats = recentChats.filter(
    (preview) => preview.chatroom_id !== chatroomId
  );

  return { specificChat, restChats };
};
