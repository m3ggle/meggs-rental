import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";

export const useGetChatInformation = (chatId) => {
  const getOfferCard = async () => {
      if (chatId !== null) {
      return await supabase.rpc("get_chat_information", {
        chat_id: chatId,
      });
    }
    return { error: null, data: null };
  };

  const { data, isLoading } = useQuery(
    ["get_chat_information", chatId],
    getOfferCard,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );

  return { chatInformation: data?.data, isLoading, error: data?.error };
};
