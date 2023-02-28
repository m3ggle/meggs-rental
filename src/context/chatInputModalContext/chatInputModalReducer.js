const chatInputModalReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CHAT_INPUT_MODAL":
      return {
        ...state,
        ...payload,
      };
    default:
      break;
  }
};

export default chatInputModalReducer;
