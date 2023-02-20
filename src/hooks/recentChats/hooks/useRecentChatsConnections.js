import { useCallback, useEffect } from "react";
import supabase from "../../../config/supabaseClient";
import { useRecentChatsContext } from "../../../context/recentChats/recentChatsContext";
import { checkChannelAlreadyExist } from "../../../helpers/checkChannelAlreadyExist";

export const useRecentChatsConnections = () => {
  const { dispatchRecentChats, recentChats } = useRecentChatsContext();

  const handleChatroomChange = useCallback(
    async (payload) => {
      try {
        const { new: newObj } = payload;
        const chatroomId = newObj.id;
        const newLastMsgId = newObj.last_message_id;

        // get specific chat preview out of recentChats
        let tempChatPreview = recentChats.filter(
          (preview) => preview.chatroom_id === chatroomId
        )[0];

        // get all chat previews which are not the one in question
        let tempRecentChats = recentChats.filter(
          (preview) => preview.chatroom_id !== chatroomId
        );

        // get new message information
        let { data, error } = await supabase.rpc("get_message", {
          message_id: newLastMsgId,
        });

        if (error) {
          console.error(error);
          return;
        }

        // replace with new information
        const newChatPreview = {
          ...tempChatPreview,
          is_read: data.is_read,
          is_read_by: data.is_read_by,
          last_message_content: data.content,
          last_message_created_at: data.created_at,
          last_message_id: data.id,
          last_message_user_id: data.user_id,
        };

        console.log([{ ...newChatPreview }, ...tempRecentChats]);

        // replace combine the special one and the other chat previews and dispatch for context
        dispatchRecentChats({
          type: "SET_RECENT_CHATS",
          payload: {
            recentChats: [{ ...newChatPreview }, ...tempRecentChats],
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    [recentChats, dispatchRecentChats]
  );

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
              handleChatroomChange(payload);
            }
          )
          .subscribe();
      }
    },
    [handleChatroomChange]
  );

  const establishConnections = useCallback(() => {
    recentChats.forEach((chat) => {
      subscribeToChannel(chat.chatroom_id);
    });
  }, [recentChats, subscribeToChannel]);

  useEffect(() => {
    establishConnections();
  }, [establishConnections]);
};
