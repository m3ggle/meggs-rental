import { useCallback, useEffect, useState } from "react";
import supabase from "../../../config/supabaseClient";
import { checkChannelAlreadyExist } from "../../../helpers/checkChannelAlreadyExist";
import { checkAndUpdateMessage } from "../helpers/checkAndUpdateMessage";

// component establishes a real time connection to the postgresql table messages on the event insert
// if it gets triggered, then it takes the new message and inserts it into the messages state locally

export const useRealTimeChat = ({ setMessages, chatId, userId }) => {
  const [newMessageChannel, setNewMessageChannel] = useState();

  const handleNewMessage = useCallback(
    async (payload) => {
      setMessages((prevState) => [{ ...payload.new }, ...prevState]);

      // check if the current user was the sender, if not then update the message
      checkAndUpdateMessage({ payload, userId });
    },
    [setMessages, userId]
  );

  const subscribeToChannel = useCallback(() => {
    if (!checkChannelAlreadyExist("newMessage")) {
      const channel = supabase
        .channel("newMessage")
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "messages",
            filter: `chatroom_id=eq.${chatId}`,
          },
          (payload) => {
            handleNewMessage(payload);
          }
        )
        .subscribe();

      setNewMessageChannel(channel);
    }
  }, [setNewMessageChannel, handleNewMessage, chatId]);

  useEffect(() => {
    subscribeToChannel();

    return () => {
      // unsubscribe if it exists
      if (checkChannelAlreadyExist("newMessage")) {
        newMessageChannel?.unsubscribe();
      }
    };
  }, [subscribeToChannel, newMessageChannel]);
};
