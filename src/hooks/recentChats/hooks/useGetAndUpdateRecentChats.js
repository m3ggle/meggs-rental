import { useCallback, useEffect } from "react";
import { useGetChatPreviews } from "../../../api/supabase/useGetChatPreviews";
import { useRecentChatsContext } from "../../../context/recentChats/recentChatsContext";
import { useRecentChatsConnections } from "./useRecentChatsConnections";

export const useGetAndUpdateRecentChats = () => {
  const { dispatchRecentChats } = useRecentChatsContext();
  const { chatPreviews } = useGetChatPreviews();
  const { establishConnections } = useRecentChatsConnections();

  // updateContext runs every time the chatPreviews change eg. when initially getting the data and when pagination

  const updateContext = useCallback(() => {
    if (chatPreviews.length > 0) {
      dispatchRecentChats({
        type: "SET_RECENT_CHATS",
        payload: chatPreviews,
      });

      // establish connections to all chat previews/recent chats
      establishConnections(chatPreviews);
    }
  }, [chatPreviews, dispatchRecentChats, establishConnections]);

  // when the chatPreviews changes
  useEffect(() => {
    updateContext();
  }, [updateContext]);
};

// ! thoughts on pagination
/* 
- with the current setup, pagination would replace the whole recentChats
  meaning the the already existing data will be replaced with the old version of it, the additional data would be brand new
- Furthermore to explain the situation, 
  - at the beginning there are 10 recent chats
  - user chats with people, with every change the recent chats context will represent the newest state
  - NOW the user clicks on load more and `useGetChatPreviews` and subsequently `chatPreviews` changes meaning `updateContext` will be triggered on the changed `chatPreviews`
    with the "new" data of `chatPreviews` the `updateContext` sets the context and calls `establishConnections`
    - but the problem here is, `useGetChatPreviews` uses react query keepTrackOn...
*/
