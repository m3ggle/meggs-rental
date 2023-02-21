import { useCallback, useEffect } from "react";
import supabase from "../../../config/supabaseClient";
import { useRecentChatsContext } from "../../../context/recentChats/recentChatsContext";
import { checkChannelAlreadyExist } from "../../../helpers/checkChannelAlreadyExist";

export const useHandleUpdatedChatroomPayloadChange = () => {
  const { recentChats, updatedChatroomPayload, dispatchRecentChats } =
    useRecentChatsContext();

  const subscribeToNewMessage = (newId) => {
    if (!checkChannelAlreadyExist(`chatroom_latest_message_${newId}`)) {
      supabase
        .channel(`chatroom_latest_message_${newId}`)
        .on(
          "postgres_changes",
          {
            event: "UPDATE",
            schema: "public",
            table: "messages",
            filter: `id=eq.${newId}`,
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
  };

  const handleMessageSubscribeChange = ({ newId, oldId }) => {
    if (checkChannelAlreadyExist(`chatroom_latest_message_${oldId}`)) {
      // unsub old
      supabase.channel(`chatroom_latest_message_${oldId}`).unsubscribe();
      // sub new
      subscribeToNewMessage(newId);
    }
  };

  const handleChatroomChange = useCallback(async () => {
    try {
      // if empty,leave
      if (Object.keys(updatedChatroomPayload).length === 0) {
        return;
      }

      // preparation
      const { new: newObj, old: oldObj } = updatedChatroomPayload;
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

      // if error, leave
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

      // replace combine the special one and the other chat previews and dispatch for context
      dispatchRecentChats({
        type: "SET_RECENT_CHATS",
        payload: [{ ...newChatPreview }, ...tempRecentChats],
      });

      // unsubscribe the old message and subscribe to the new message
      handleMessageSubscribeChange({
        newId: newObj.last_message_id,
        oldId: oldObj.last_message_id,
      });
    } catch (error) {
      console.log(error);
    }
  }, [recentChats, dispatchRecentChats, updatedChatroomPayload]);

  useEffect(() => {
    handleChatroomChange();
  }, [updatedChatroomPayload]);
};
