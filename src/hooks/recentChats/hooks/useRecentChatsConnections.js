import { useCallback } from "react";
import supabase from "../../../config/supabaseClient";
import { useRecentChatsContext } from "../../../context/recentChats/recentChatsContext";
import { checkChannelAlreadyExist } from "../../../helpers/checkChannelAlreadyExist";

export const useRecentChatsConnections = () => {
  const { dispatchRecentChats } = useRecentChatsContext();

  const subscribeToChannel = useCallback(
    (id) => {
      if (!checkChannelAlreadyExist(`chatroom_${id}`)) {
        supabase
          .channel(`chatroom_${id}`)
          .on(
            "postgres_changes",
            {
              event: "UPDATE",
              schema: "public",
              table: "chatrooms",
              filter: `id=eq.${id}`,
            },
            (payload) => {
              dispatchRecentChats({
                type: "SET_CHANGE_PAYLOAD",
                payload,
              });
            }
          )
          .subscribe();
      }
    },
    [dispatchRecentChats]
  );

  const establishConnections = useCallback(
    (chatPreviews) => {
      chatPreviews.forEach((chat) => {
        subscribeToChannel(chat.chatroom_id);
      });
    },
    [subscribeToChannel]
  );

  return { establishConnections };
};
