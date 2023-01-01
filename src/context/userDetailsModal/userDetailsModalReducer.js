const userDetailsModalReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_USER_DETAILS_MODAL":
      return {
        ...state,
        ...payload,
      };
      case "SET_USER_DATA": 
          return {
              ...state,
              modalData: payload
          }
    default:
      break;
  }
};

export default userDetailsModalReducer;
