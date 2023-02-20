import { useCallback, useEffect } from "react";
import { useGetChatPreviews } from "../../../api/supabase/useGetChatPreviews";
import { useRecentChatsContext } from "../../../context/recentChats/recentChatsContext";
import { useRecentChatsConnections } from "./useRecentChatsConnections";

export const useGetAndUpdateRecentChats = () => {
  const { dispatchRecentChats } = useRecentChatsContext();
  const { chatPreviews } = useGetChatPreviews();
  const { establishConnections } = useRecentChatsConnections();

  const updateContext = useCallback(() => {
    if (chatPreviews.length > 0) {
      dispatchRecentChats({
        type: "SET_RECENT_CHATS",
        payload: chatPreviews,
      });

      establishConnections(chatPreviews);
    }
  }, [chatPreviews, dispatchRecentChats, establishConnections]);

  useEffect(() => {
    updateContext();
  }, [updateContext]);
};
