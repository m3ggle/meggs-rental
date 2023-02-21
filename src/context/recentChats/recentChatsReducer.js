const recentChatsReducer = (state, action) => {
  const { type, payload } = action;
  if (type === "SET_UPDATED_MESSAGE_PAYLOAD") {
    console.log("context, specifically message..., gets updated with the payload of: ", payload)
  }
    switch (type) {
      case "SET_RECENT_CHATS":
        return {
          ...state,
          recentChats: payload,
        };
      case "SET_LIMIT_AND_OFFSET":
        return {
          ...state,
          limit: payload.limit,
          offset: payload.offset,
        };
      case "SET_LIMIT":
        return {
          ...state,
          limit: payload,
        };
      case "SET_OFFSET":
        return {
          ...state,
          offset: payload,
        };
      case "SET_UPDATED_CHATROOM_PAYLOAD":
        return {
          ...state,
          updatedChatroomPayload: payload,
        };
      case "SET_UPDATED_MESSAGE_PAYLOAD":
        return {
          ...state,
          updatedMessagePayload: payload,
        };

      default:
        break;
    }
};

export default recentChatsReducer;
