import React from "react";
import { NavigationProvider } from "./navigation/navigationContext";
import { MapCoordProvider } from "./map/mapCoord/mapCoordContext";
import { MapSubProvider } from "./map/mapSub/mapSubContext";

const ContextProviderWrapper = ({ children }) => {
  return (
    <MapCoordProvider>
      <MapSubProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </MapSubProvider>
    </MapCoordProvider>
  );
};

export default ContextProviderWrapper;
