import React from "react";
import { DarkModeProvider } from "./darkMode/darkModeContext";
import { MapCoordProvider } from "./map/mapCoord/mapCoordContext";
import { MapSubProvider } from "./map/mapSub/mapSubContext";
import { NavigationProvider } from "./navigation/navigationContext";
import { NotifyModalProvider } from "./notifyModal/notifyModalContext";
import { UserProvider } from "./user/userContext";

const ContextProviderWrapper = ({ children }) => {
  return (
    <UserProvider>
      <MapCoordProvider>
        <MapSubProvider>
          <NavigationProvider>
            <DarkModeProvider>
              <NotifyModalProvider>{children}</NotifyModalProvider>
            </DarkModeProvider>
          </NavigationProvider>
        </MapSubProvider>
      </MapCoordProvider>
    </UserProvider>
  );
};

export default ContextProviderWrapper;
