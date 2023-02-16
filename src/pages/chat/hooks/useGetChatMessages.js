import { useQuery } from "react-query";
import supabase from "../../../config/supabaseClient";

export const useGetChatMessages = ({ chatId, offset = 0, limit = 10 }) => {
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

  const { data, isLoading } = useQuery(
    ["get_chat_messages", chatId, offset, limit],
    getOfferCard,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity, // ten minutes
    }
  );

  return { chatMessages: data?.data ?? [], isLoading, error: data?.error };
};
