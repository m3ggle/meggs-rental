import { createContext, useContext, useReducer } from "react";
import mapCoordReducer from "./mapCoordReducer";

const MapCoordContext = createContext({
  bounds: {},
  storedZoom: null,
  position: {},
  externalPositionChange: null,

  dispatchMapCoord: () => {}
});
MapCoordContext.displayName = "MapCoordContext";

export function useMapCoordContext() {
  return useContext(MapCoordContext);
}

export const MapCoordProvider = ({ children }) => {
  const initialState = {
    bounds: {},
    storedZoom: null,
    position: {},
    externalPositionChange: null,
  };

  const [state, dispatchMapCoord] = useReducer(mapCoordReducer, initialState);

  return (
    <MapCoordContext.Provider value={{ ...state, dispatchMapCoord }}>
      {children}
    </MapCoordContext.Provider>
  );
};
