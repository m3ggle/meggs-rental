const recentChatsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_RECENT_CHATS":
      return {
          ...payload,
          ...state,
      };
    default:
      break;
  }
};

export default recentChatsReducer;
