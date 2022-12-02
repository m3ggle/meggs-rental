import React from "react";
import { MapCoordProvider } from "./map/mapCoord/mapCoordContext";
import { MapSubProvider } from "./map/mapSub/mapSubContext";

const ContextProviderWrapper = ({ children }) => {
  return (
    <MapCoordProvider>
      <MapSubProvider>{children}</MapSubProvider>
    </MapCoordProvider>
  );
};

export default ContextProviderWrapper;
