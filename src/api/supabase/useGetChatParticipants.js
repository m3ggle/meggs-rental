import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";

export const useGetChatParticipants = (chatroomId) => {
  const getChatParticipants = async () => {
    if (chatroomId !== null) {
      return supabase.rpc("get_chat_participants", {
        chatroom_id: chatroomId,
      });
    }
    return { error: null, data: null };
  };

  const { data, isLoading } = useQuery(
    ["get_chat_participants", chatroomId],
    getChatParticipants,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity, // ten minutes
    }
  );

  return { chatParticipants: data?.data, isLoading, error: data?.error };
};
