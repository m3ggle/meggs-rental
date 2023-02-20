import { createContext, useContext, useReducer } from "react";
import recentChatsReducer from "./recentChatsReducer";

const RecentChatsContext = createContext({
  recentChats: [],
  limit: 0,
  offset: 0,

  loadMorePreviews: () => {},
  dispatchRecentChats: () => {},
});
RecentChatsContext.displayName = "RecentChatsContext";

export function useRecentChatsContext() {
  return useContext(RecentChatsContext);
}

export const RecentChatsProvider = ({ children }) => {
  const initialState = {
    recentChats: [],
    limit: 10,
    offset: 0,
  };

  const [state, dispatchRecentChats] = useReducer(
    recentChatsReducer,
    initialState
  );

  const loadMorePreviews = () => {
    dispatchRecentChats({
      type: "UPDATE_LIMIT_AND_OFFSET",
      payload: {
        limit: state.limit + 10,
        offset: state.offset + 10,
      },
    });
  };

  return (
    <RecentChatsContext.Provider
      value={{ ...state, dispatchRecentChats, loadMorePreviews }}
    >
      {children}
    </RecentChatsContext.Provider>
  );
};
