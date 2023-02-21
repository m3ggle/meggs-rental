import { useCallback } from "react";
import supabase from "../../../config/supabaseClient";
import { useRecentChatsContext } from "../../../context/recentChats/recentChatsContext";
import { checkChannelAlreadyExist } from "../../../helpers/checkChannelAlreadyExist";

export const useRecentChatsConnections = () => {
  const { dispatchRecentChats } = useRecentChatsContext();

  const subscribeToChannel = useCallback(
    (chatroomId, lastMessageId) => {
      // initially subscribing to chatPreviews
      if (!checkChannelAlreadyExist(`chatroom_${chatroomId}`)) {
        supabase
          .channel(`chatroom_${chatroomId}`)
          .on(
            "postgres_changes",
            {
              event: "UPDATE",
              schema: "public",
              table: "chatrooms",
              filter: `id=eq.${chatroomId}`,
            },
            (payload) => {
              dispatchRecentChats({
                type: "SET_UPDATED_CHATROOM_PAYLOAD",
                payload,
              });
            }
          )
          .subscribe();
      }
      if (
        !checkChannelAlreadyExist(`chatroom_latest_message_${lastMessageId}`)
      ) {
        supabase
          .channel(`chatroom_latest_message_${lastMessageId}`)
          .on(
            "postgres_changes",
            {
              event: "UPDATE",
              schema: "public",
              table: "messages",
              filter: `id=eq.${lastMessageId}`,
            },
            (payload) => {
              dispatchRecentChats({
                type: "SET_UPDATED_MESSAGE_PAYLOAD",
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
        subscribeToChannel(chat.chatroom_id, chat.last_message_id);
      });
    },
    [subscribeToChannel]
  );

  return { establishConnections };
};
