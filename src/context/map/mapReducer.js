const mapReducer = (state, action) => {
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
    case "FLY":
      return {
        ...state,
        flyTo: payload,
      };
    default:
      break;
  }
};

export default mapReducer;
