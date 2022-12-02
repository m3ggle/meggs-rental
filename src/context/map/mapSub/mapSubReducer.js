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
    case "UPDATE_HOVER_MARKER":
      return {
        ...state,
        hoverMarker: payload,
      };
    case "UPDATE_ACTIVE_MARKER":
      return {
        ...state,
        activeMarker: payload,
      };
    default:
      break;
  }
};

export default mapCoordReducer;
