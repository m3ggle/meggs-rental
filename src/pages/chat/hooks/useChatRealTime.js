import { useCallback, useEffect } from "react";
import supabase from "../../../config/supabaseClient";
import { checkChannelAlreadyExist } from "../../../helpers/checkChannelAlreadyExist";

export const useChatRealTime = ({ setMessages, chatId }) => {
  const handleNewMessage = useCallback(
    (payload) => {
      setMessages((prevState) => [{ ...payload.new }, ...prevState]);
    },
    [setMessages]
  );

  useEffect(() => {
    if (!checkChannelAlreadyExist("newMessage")) {
      supabase
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
    }

    return () => {
      // ! throws an error because: "channel.unsubscribe is not a function"
      // if (checkChannelAlreadyExist("newMessage")) {
      //   supabase.removeChannel("newMessage");
      // }
    };
  }, [chatId, handleNewMessage]);
};
