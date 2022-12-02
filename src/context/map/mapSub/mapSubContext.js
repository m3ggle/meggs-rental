import { createContext, useContext, useReducer } from "react";
import mapSubReducer from "./mapSubReducer";

const MapSubContext = createContext();
MapSubContext.displayName = "MapSubContext";

export function useMapSubContext() {
  return useContext(MapSubContext);
}

export const MapSubProvider = ({ children }) => {
  const initialState = {
    mapLoaded: false,
    flyTo: false,
    activeMarker: false,
    hoverMarker: false,
  };

  const [state, dispatchMapSub] = useReducer(mapSubReducer, initialState);

  return (
    <MapSubContext.Provider value={{ ...state, dispatchMapSub }}>
      {children}
    </MapSubContext.Provider>
  );
};
