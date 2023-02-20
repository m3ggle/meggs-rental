import { useState } from "react";
import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";

export const useGetChatMessages = ({ chatId, offset = 0, limit = 50 }) => {
  const [messages, setMessages] = useState([])
  
  const getOfferCard = async () => {
    if (chatId !== null) {
      return await supabase.rpc("get_chat_messages", {
        chat_id: chatId,
        limit_: limit,
        offset_: offset,
      });
    }
    return { error: null, data: [] };
  };

  const onSuccess = (data) => {
    if (data?.data !== null && typeof data.data === 'object') {
      setMessages([...data.data])
    }
  }

  const { data, isLoading } = useQuery(
    ["get_chat_messages", chatId, offset, limit],
    getOfferCard,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity, // ten minutes
      onSuccess,
    }
  );

  return { messages, isLoading, error: data?.error, setMessages };
};
