import { useCallback, useEffect } from "react";
import supabase from "../../../config/supabaseClient";
import { useRecentChatsContext } from "../../../context/recentChats/recentChatsContext";

export const useHandleChatRoomChange = () => {
  const { recentChats, changePayload, dispatchRecentChats } =
    useRecentChatsContext();

  const handleChatroomChange = useCallback(async () => {
    try {
      if (Object.keys(changePayload).length === 0) {
        console.log("is empty: ", Object.keys(changePayload).length);
        return;
      }
      const { new: newObj } = changePayload;
      const chatroomId = newObj.id;
      const newLastMsgId = newObj.last_message_id;

      console.log("nskejdnkwe", recentChats, chatroomId);

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

      console.log(tempChatPreview, newChatPreview);

      console.log([{ ...newChatPreview }, ...tempRecentChats]);

      // replace combine the special one and the other chat previews and dispatch for context
      dispatchRecentChats({
        type: "SET_RECENT_CHATS",
        payload: [{ ...newChatPreview }, ...tempRecentChats],
      });
    } catch (error) {
      console.log(error);
    }
  }, [recentChats, dispatchRecentChats, changePayload]);

  useEffect(() => {
    console.log("hete the payload change to", changePayload);
    handleChatroomChange();
  }, [changePayload]);
};
