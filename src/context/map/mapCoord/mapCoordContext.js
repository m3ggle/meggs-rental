import { createContext, useContext, useReducer } from "react";
import { mapCoordContextTemplate } from "./mapCoordContextTemplate";
import mapCoordReducer from "./mapCoordReducer";

const MapCoordContext = createContext({
  ...mapCoordContextTemplate,

  dispatchMapCoord: () => {}
});
MapCoordContext.displayName = "MapCoordContext";

export function useMapCoordContext() {
  return useContext(MapCoordContext);
}

export const MapCoordProvider = ({ children }) => {
  const initialState = {
    ...mapCoordContextTemplate,
  };

  const [state, dispatchMapCoord] = useReducer(mapCoordReducer, initialState);

  return (
    <MapCoordContext.Provider value={{ ...state, dispatchMapCoord }}>
      {children}
    </MapCoordContext.Provider>
  );
};
