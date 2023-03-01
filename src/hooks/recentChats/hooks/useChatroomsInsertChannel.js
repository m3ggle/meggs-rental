import { useCallback, useEffect } from "react";
import { queryClient } from "../../../api/reactQuery/queryClient";
import supabase from "../../../config/supabaseClient";
import { useRecentChatsContext } from "../../../context/recentChats/recentChatsContext";
import { useUserContext } from "../../../context/user/userContext";
import { checkChannelAlreadyExist } from "../../../helpers/checkChannelAlreadyExist";

export const useChatroomsInsertChannel = () => {
  const { userId } = useUserContext();
  const { limit, offset } = useRecentChatsContext();

  const invalidateQuery = useCallback(() => {
    queryClient.invalidateQueries(["get_chat_previews", userId, offset, limit]);
  }, [userId, offset, limit]);

  const subscribeToChannel = useCallback(() => {
    supabase
      .channel(`insert_chatroom_channel`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "chatrooms",
          filter: `owner_id=eq.${userId}`,
        },
        () => {
          invalidateQuery();
        }
      )
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "chatrooms",
          filter: `borrower_id=eq.${userId}`,
        },
        () => {
          invalidateQuery();
        }
      )
      .subscribe();
  }, [invalidateQuery, userId]);

  const unsubscribeFromChannel = () => {
    supabase.channel(`insert_chatroom_channel`).unsubscribe();
  };

  useEffect(() => {
    if (userId === null) {
      return;
    }

    if (!checkChannelAlreadyExist(`insert_chatroom_channel`)) {
      subscribeToChannel();
      return;
    }

    unsubscribeFromChannel();
    subscribeToChannel();
  }, [userId, limit, offset]);
};
