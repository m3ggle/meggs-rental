import { useCallback, useEffect } from "react";
import { useGetChatPreviews } from "../../../api/supabase/useGetChatPreviews";
import { useRecentChatsContext } from "../../../context/recentChats/recentChatsContext";

export const useGetAndUpdateRecentChatsContext = () => {
  const { dispatchRecentChats } = useRecentChatsContext();
  const { chatPreviews } = useGetChatPreviews({});

  const updateContext = useCallback(() => {
    if (chatPreviews.length > 0) {
      dispatchRecentChats({
        type: "SET_RECENT_CHATS",
        payload: { recentChats: chatPreviews },
      });
    }
  }, [chatPreviews, dispatchRecentChats]);

  useEffect(() => {
    updateContext();
  }, [updateContext]);
};
