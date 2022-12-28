const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_USER_CONTEXT":
      return {
        ...payload
      };
    default:
      break;
  }
};

export default userReducer;
