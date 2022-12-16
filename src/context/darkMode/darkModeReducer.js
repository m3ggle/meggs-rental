const darkModeReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "SET_TO_DARK":
      return {
        darkMode: true,
      };
    case "SET_TO_LIGHT":
      return {
          darkMode: false,
      };
    default:
      break;
  }
};

export default darkModeReducer;
