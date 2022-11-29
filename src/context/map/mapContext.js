import { createContext, useContext, useReducer } from "react";
import mapReducer from "./mapReducer";

const MapContext = createContext();
MapContext.displayName = "MapContext";

export function useMapContext() {
  return useContext(MapContext);
}

export const MapProvider = ({ children }) => {
  const initialState = {
    bounds: {},
    enlargedBounds: {},
    storedZoom: null,
    flyTo: false,
    position: {}
  };

  const [state, dispatchMap] = useReducer(
    mapReducer,
    initialState
  );

  return (
    <MapContext.Provider value={{ ...state, dispatchMap }}>
      {children}
    </MapContext.Provider>
  );
};
