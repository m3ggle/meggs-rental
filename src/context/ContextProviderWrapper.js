import React from "react";
import { DarkModeProvider } from "./darkMode/darkModeContext";
import { MapCoordProvider } from "./map/mapCoord/mapCoordContext";
import { MapPreviewProvider } from "./map/mapPreview/mapPreviewContext";
import { MapSubProvider } from "./map/mapSub/mapSubContext";
import { NavigationProvider } from "./navigation/navigationContext";
import { NotifyModalProvider } from "./notifyModal/notifyModalContext";
import { UserProvider } from "./user/userContext";
import { UserDetailsModalProvider } from "./userDetailsModal/userDetailsModalContext";

const ContextProviderWrapper = ({ children }) => {
  return (
    <UserProvider>
      <MapCoordProvider>
        <MapSubProvider>
          <MapPreviewProvider>
            <NavigationProvider>
              <DarkModeProvider>
                {/* modals */}
                <NotifyModalProvider>
                  <UserDetailsModalProvider>
                    {children}
                  </UserDetailsModalProvider>
                </NotifyModalProvider>
              </DarkModeProvider>
            </NavigationProvider>
          </MapPreviewProvider>
        </MapSubProvider>
      </MapCoordProvider>
    </UserProvider>
  );
};

export default ContextProviderWrapper;
