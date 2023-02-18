import React, { useCallback, useEffect } from "react";
import { useGetChatMessages } from "../../../../api/supabase/useGetChatMessages";
import Loading from "../../../../components/Loading";
import supabase from "../../../../config/supabaseClient";
import { useUserContext } from "../../../../context/user/userContext";
import { checkChannelAlreadyExist } from "../../../../helpers/checkChannelAlreadyExist";
import ChatMessage from "./ChatMessage";

const ChatMessageThread = ({ chatId }) => {
  const { userId } = useUserContext();

  const showMe = supabase.getChannels()
  console.log(showMe)

  const { messages, isLoading, setMessages } = useGetChatMessages({ chatId });

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

  console.log(messages);

  return (
    <>
      {isLoading ? (
        <div className="justify-content flex h-screen w-full items-center">
          <Loading />
        </div>
      ) : (
        <div className="flex w-full flex-grow flex-col-reverse gap-y-2 overflow-scroll p-6">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              owner={userId === message.user_id ? true : false}
              text={message.content}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ChatMessageThread;
