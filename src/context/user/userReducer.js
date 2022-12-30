const userReducer = (state, action) => {
  const { type, payload } = action;
  console.log("inside userReducer", payload);
  switch (type) {
    case "SET_USER_CONTEXT":
      return {
        ...payload,
      };
    case "SET_USER":
      return {
        ...state,
        userData: {
          ...state.userData,
          ...payload,
        },
      };
    default:
      break;
  }
};

export default userReducer;
