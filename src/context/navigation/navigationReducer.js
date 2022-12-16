const navigationReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "OPEN_NAVIGATION":
      return {
        isOpen: true,
      };
    case "CLOSE_NAVIGATION":
      return {
        isOpen: false,
      };
    default:
      break;
  }
};

export default navigationReducer;
