import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";
import { useUserContext } from "../../context/user/userContext";

export const useGetChatPreviews = ({ offset = 0, limit = 10 }) => {
  const { userId } = useUserContext();
  
  const getChatPreviews = async () => {
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
    getChatPreviews,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );

  return {
    chatPreviews: data?.data ?? [],
    isLoading,
    error: data?.error,
  };
};
