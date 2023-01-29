import { createContext, useContext, useReducer } from "react";
import mapPreviewReducer from "./mapPreviewReducer";
import { mapPreviewTemplate } from "./mapPreviewTemplate";

const MapPreview = createContext({
  ...mapPreviewTemplate,

  dispatchPreview: () => {},
});
MapPreview.displayName = "MapPreview";

export function useMapPreview() {
  return useContext(MapPreview);
}

export const MapPreviewProvider = ({ children }) => {
  const initialState = {
    ...mapPreviewTemplate,
  };

  const [state, dispatchPreview] = useReducer(mapPreviewReducer, initialState);

  return (
    <MapPreview.Provider value={{ ...state, dispatchPreview }}>
      {children}
    </MapPreview.Provider>
  );
};
