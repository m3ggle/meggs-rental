import { useCallback, useEffect, useState } from "react";
import supabase from "../../../config/supabaseClient";
import { checkChannelAlreadyExist } from "../../../helpers/checkChannelAlreadyExist";

export const useRealTimeMessageStatus = ({ id, isFirst, isRead }) => {
  const [messageChannel, setMessageChannel] = useState();
  const [isReadState, setIsReadState] = useState(isRead);

  const handleMessageUpdate = (payload) => {
    try {
      const { new: newObj } = payload;

      if (newObj.is_read !== isReadState) {
        setIsReadState(newObj.is_read);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const subscribeToChannel = useCallback(() => {
    // use case of an message that already exists and was first but now is second
    if (checkChannelAlreadyExist(`message_${id}`) && !isFirst) {
      console.log("unsub: ", messageChannel);
      messageChannel?.unsubscribe();
    }

    // use case of an message that is first and does not have an real time connection
    if (!checkChannelAlreadyExist(`message_${id}`) && isFirst) {
      const channel = supabase
        .channel(`message_${id}`)
        .on(
          "postgres_changes",
          {
            event: "UPDATE",
            schema: "public",
            table: "messages",
            filter: `id=eq.${id}`,
          },
          (payload) => {
            handleMessageUpdate(payload);
          }
        )
        .subscribe();

      setMessageChannel(channel);
    }
  }, [setMessageChannel, id, isFirst]);

  useEffect(() => {
    subscribeToChannel();

    return () => {
      // unsubscribe if it exists
      if (checkChannelAlreadyExist(`message_${id}`)) {
        messageChannel?.unsubscribe();
      }
    };
  }, [subscribeToChannel, id, isFirst]);

  return { isReadState };
};
