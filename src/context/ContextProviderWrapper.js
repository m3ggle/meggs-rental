import React from "react";
import { ChatInputModalProvider } from "./chatInputModalContext/chatInputModalContext";
import { DarkModeProvider } from "./darkMode/darkModeContext";
import { MapCoordProvider } from "./map/mapCoord/mapCoordContext";
import { MapSubProvider } from "./map/mapSub/mapSubContext";
import { NavigationProvider } from "./navigation/navigationContext";
import { NotifyModalProvider } from "./notifyModal/notifyModalContext";
import { RecentChatsProvider } from "./recentChats/recentChatsContext";
import { UserProvider } from "./user/userContext";
import { UserDetailsModalProvider } from "./userDetailsModal/userDetailsModalContext";

const ContextProviderWrapper = ({ children }) => {
  return (
    <UserProvider>
      <RecentChatsProvider>
        <MapCoordProvider>
          <MapSubProvider>
            <NavigationProvider>
              <DarkModeProvider>
                {/* modals */}
                <NotifyModalProvider>
                  <UserDetailsModalProvider>
                    <ChatInputModalProvider>{children}</ChatInputModalProvider>
                  </UserDetailsModalProvider>
                </NotifyModalProvider>
              </DarkModeProvider>
            </NavigationProvider>
          </MapSubProvider>
        </MapCoordProvider>
      </RecentChatsProvider>
    </UserProvider>
  );
};

export default ContextProviderWrapper;
