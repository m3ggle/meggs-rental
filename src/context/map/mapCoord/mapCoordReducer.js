const mapCoordReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_BOUNDS":
      return {
        ...state,
        bounds: payload,
      };
    case "SET_BOUNDS_AND_POSITION":
      return {
        ...state,
        bounds: payload.bounds,
        position: payload.position,
      };
    case "SET_POSITION":
      return {
        ...state,
        position: payload,
      };
    case "FLY":
      return {
        ...state,
        flyTo: payload,
      };
    case "SET_ENLARGED_BOUNDS":
      return {
        ...state,
        enlargedBounds: payload,
      };
    case "SET_STORED_ZOOM":
      return {
        ...state,
        storedZoom: payload,
      };
    case "SET_MAP_LOAD":
      return {
        ...state,
        mapLoaded: payload,
      };
    case "SET_EXTERNAL_POSITION_CHANGES":
      return {
        ...state,
        externalPositionChange: payload
      };
    default:
      break;
  }
};

export default mapCoordReducer;
