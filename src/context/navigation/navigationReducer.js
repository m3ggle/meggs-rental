const navigationReducer = (state, action) => {
  const { type } = action;
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
    default:
      break;
  }
};

export default navigationReducer;
