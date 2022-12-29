const notifyModalReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_NOTIFY_MODAL":
      return {
        ...state,
        ...payload,
      };
    default:
      break;
  }
};

export default notifyModalReducer;
