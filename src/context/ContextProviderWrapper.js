import React from "react";
import { NavigationProvider } from "./navigation/navigationContext";
import { MapCoordProvider } from "./map/mapCoord/mapCoordContext";
import { MapSubProvider } from "./map/mapSub/mapSubContext";
import { DarkModeProvider } from "./darkMode/darkModeContext";

const ContextProviderWrapper = ({ children }) => {
  return (
    <MapCoordProvider>
      <MapSubProvider>
        <NavigationProvider>
          <DarkModeProvider>
          {children}
        </DarkModeProvider>
        </NavigationProvider>
      </MapSubProvider>
    </MapCoordProvider>
  );
};

export default ContextProviderWrapper;
