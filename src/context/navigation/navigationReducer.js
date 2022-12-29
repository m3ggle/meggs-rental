const navigationReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "OPEN_NAVIGATION":
      return {
        ...state,
        isOpen: true,
      };
    case "CLOSE_NAVIGATION":
      return {
        ...state,
        isOpen: false,
      };
    case "SET_MENU": 
      return {
        ...state,
        menu: payload,
      }
    default:
      break;
  }
};

export default navigationReducer;
