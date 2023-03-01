import { useCallback, useEffect } from "react";
import supabase from "../../../config/supabaseClient";
import { useRecentChatsContext } from "../../../context/recentChats/recentChatsContext";
import { checkChannelAlreadyExist } from "../../../helpers/checkChannelAlreadyExist";
import { splitChatPreviews } from "../helpers/splitChatPreviews";

export const useHandleUpdatedMessagePayloadChange = () => {
  const { recentChats, updatedMessagePayload, dispatchRecentChats } =
    useRecentChatsContext();

  const handleMessageChange = useCallback(async () => {
    try {
      // if empty,leave
      if (Object.keys(updatedMessagePayload).length === 0) {
        return;
      }

      // preparation
      const { new: newMessage, } = updatedMessagePayload;
      const chatroomId = newMessage.chatroom_id;
    //   const messageId = newMessage.id;

      // get specific chat preview out of recentChats
      // get all chat previews which are not the one in question
        const {specificChat, restChats} = splitChatPreviews({ recentChats, chatroomId });

      // replace with new information
      const newChatPreview = {
        ...specificChat,
        is_read: newMessage.is_read,
        is_read_by: newMessage.is_read_by,
        last_message_content: newMessage.content,
        last_message_created_at: newMessage.created_at,
        last_message_id: newMessage.id,
        last_message_user_id: newMessage.user_id,
      };
        
        console.log("result: ", [{ ...newChatPreview }, ...restChats]);

      // replace combine the special one and the other chat previews and dispatch for context
      dispatchRecentChats({
        type: "SET_RECENT_CHATS",
        payload: [{ ...newChatPreview }, ...restChats],
      });
    } catch (error) {
      console.log(error);
    }
  }, [recentChats, dispatchRecentChats, updatedMessagePayload]);

  useEffect(() => {
    handleMessageChange();
  }, [updatedMessagePayload]);
};
