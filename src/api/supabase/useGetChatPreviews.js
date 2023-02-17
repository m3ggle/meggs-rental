import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";

export const useGetChatPreviews = ({ userId, offset = 0, limit = 10 }) => {
  const getOfferCard = async () => {
    if (userId !== null) {
      return await supabase.rpc("get_chat_previews", {
        uid: userId,
        limit_: limit,
        offset_: offset,
      });
    }
    return { error: null, data: [] };
  };

  const { data, isLoading } = useQuery(
    ["get_chat_previews", userId, offset, limit],
    getOfferCard,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity, // ten minutes
    }
  );

  return { chatPreviews: data?.data ?? [], isLoading, error: data?.error };
};
