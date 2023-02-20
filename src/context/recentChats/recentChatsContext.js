import { createContext, useContext, useReducer } from "react";
import recentChatsReducer from "./recentChatsReducer";

const RecentChatsContext = createContext({
  recentChats: [],

  dispatchRecentChats: () => {},
});
RecentChatsContext.displayName = "RecentChatsContext";

export function useRecentChatsContext() {
  return useContext(RecentChatsContext);
}

export const RecentChatsProvider = ({ children }) => {
  const initialState = {
    recentChats: [],
  };

  const [state, dispatchRecentChats] = useReducer(
    recentChatsReducer,
    initialState
  );

  return (
    <RecentChatsContext.Provider value={{ ...state, dispatchRecentChats }}>
      {children}
    </RecentChatsContext.Provider>
  );
};
