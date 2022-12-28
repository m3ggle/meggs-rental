const userReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "SET_USER_CONTEXT":
      return {
        ...state,
        isOpen: true,
      };
    default:
      break;
  }
};

export default userReducer;
