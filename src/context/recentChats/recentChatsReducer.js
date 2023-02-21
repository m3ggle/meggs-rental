const recentChatsReducer = (state, action) => {
  const { type, payload } = action;
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
    case "SET_CHANGE_PAYLOAD":
      return {
        ...state,
        changePayload: payload,
      };

    default:
      break;
  }
};

export default recentChatsReducer;
