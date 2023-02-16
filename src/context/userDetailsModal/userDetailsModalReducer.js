const userDetailsModalReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_USER_DETAILS_MODAL":
      return {
        ...state,
        ...payload,
      };
    default:
      break;
  }
};

export default userDetailsModalReducer;
