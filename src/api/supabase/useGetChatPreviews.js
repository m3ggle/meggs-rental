import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";
import { useRecentChatsContext } from "../../context/recentChats/recentChatsContext";
import { useUserContext } from "../../context/user/userContext";

export const useGetChatPreviews = () => {
  const { userId } = useUserContext();
  const { limit, offset } = useRecentChatsContext();

  const getChatPreviews = async () => {
    if (userId !== null) {
      return await supabase.rpc("get_chat_previews", {
        user_id: userId,
        limit: limit,
        offset: offset,
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
      keepPreviousData: true,
    }
  );

  return {
    chatPreviews: data?.data ?? [],
    isLoading,
    error: data?.error,
  };
};
