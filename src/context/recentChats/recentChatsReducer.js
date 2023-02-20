const recentChatsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_RECENT_CHATS":
      return {
        ...state,
        recentChats: payload,
      };
    case "UPDATE_LIMIT_AND_OFFSET":
      return {
        ...state,
        limit: payload.limit,
        offset: payload.offset,
      };
    case "UPDATE_LIMIT":
      return {
        ...state,
        limit: payload,
      };
    case "UPDATE_OFFSET":
      return {
        ...state,
        offset: payload,
      };

    default:
      break;
  }
};

export default recentChatsReducer;
