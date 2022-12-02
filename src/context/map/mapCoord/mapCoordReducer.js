const mapCoordReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE_BOUNDS":
      return {
        ...state,
        bounds: payload,
      };
    case "UPDATE_BOUNDS_AND_POSITION":
      return {
        ...state,
        bounds: payload.bounds,
        position: payload.position,
      };
    case "UPDATE_POSITION":
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
