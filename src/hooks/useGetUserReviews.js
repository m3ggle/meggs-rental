import { useQuery } from "react-query";
import supabase from "../config/supabaseClient";

export const useGetUserReviews = (userId, limit = 10, offset = 0) => {
  const getUserReviews = async () => {
    if (userId !== null) {
      return supabase.rpc("get_user_rs_reviews", {
        uid: userId,
        limit_: limit,
        offset_: offset,
      });
    }
    return { error: null, data: null };
  };
    
  const { data, isLoading } = useQuery(
    ["get_user_rs_reviews", userId, limit, offset],
    getUserReviews,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
        staleTime: Infinity, // ten minutes
    }
  );

  return { userReviews: data?.data, isLoading, error: data?.error };
};
