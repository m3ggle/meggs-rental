import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";

export const useGetUserOffers = (userId, limit = 10, offset = 0) => {
  const getUserOffers = async () => {
    if (userId !== null) {
      return supabase.rpc("get_user_offers", {
        user_id: userId,
        limit,
        offset,
      });
    }
    return { error: null, data: null };
  };

  const { data, isLoading } = useQuery(
    ["get_user_offers", userId, limit, offset],
    getUserOffers,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity, 
    }
  );

  return { userOffers: data?.data, isLoading, error: data?.error };
};
