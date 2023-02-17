import { useCallback, useEffect } from "react";
import supabase from "../../../config/supabaseClient";
import { useUserContext } from "../../../context/user/userContext";

export const useUpdateLastMessage = (chatInformation) => {
  const { userId } = useUserContext();

  const updateLastMessageStatus = useCallback(async (isRead, isReadBy, msgId) => {
    let { data, error } = await supabase.rpc("update_message", {
      is_read_boolean: isRead,
      is_read_by_array: isReadBy,
      message_id: msgId,
    });

    if (error) console.error(error);
    else console.log(data);
  }, []);

  useEffect(() => {
    if (chatInformation === null || !chatInformation || !userId || userId === null) {
      return;
    }

    if (!chatInformation.is_read_by.includes(userId)) {
      // preparation
      const isRead = chatInformation.is_read_by.length === 1;
      let isReadBy = chatInformation.is_read_by;
      isReadBy.push(userId);

      updateLastMessageStatus(isRead, isReadBy, chatInformation.last_message_id);
    }
  }, [chatInformation, updateLastMessageStatus, userId]);
};
