const mapCoordReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FLY":
      return {
        ...state,
        flyTo: payload,
      };
    case "UPDATE_MAP_LOAD":
      return {
        ...state,
        mapLoaded: payload,
      };
    default:
      break;
  }
};

export default mapCoordReducer;
