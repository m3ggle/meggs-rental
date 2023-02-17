import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";

export const useGetUserSummary = (userId) => {
  const getUserSummary = async () => {
    if (userId !== null) {
      return supabase.rpc("get_user_rs_summary", {
        uid: userId,
      });
    }
    return { error: null, data: null };
  };

  const { data, isLoading } = useQuery(
    ["get_user_rs_summary", userId],
    getUserSummary,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity, // ten minutes
    }
  );

  return { userSummary: data?.data, isLoading, error: data?.error };
};
