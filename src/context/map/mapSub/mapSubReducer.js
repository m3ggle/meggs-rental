const mapCoordReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FLY":
      return {
        ...state,
        flyTo: payload,
      };
    case "SET_MAP_LOAD":
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
    case "SET_DEFAULT":
      return {
        mapLoaded: false,
        flyTo: false,
        activeMarker: null,
        hoverMarker: null,
      };
    default:
      break;
  }
};

export default mapCoordReducer;
