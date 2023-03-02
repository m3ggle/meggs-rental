import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";
import { useUserContext } from "../../context/user/userContext";

export const useGetUserOffersByFilter = (filter = {}) => {
  const { userId } = useUserContext();
  
  const getUserOffers = async () => {
    if (userId !== null) {
      return supabase.rpc("get_user_offers_by_filter", {
        ...filter,
        user_id: userId,
      });
    }
    return { error: null, data: null };
  };

  const { data, isLoading } = useQuery(
    ["get_user_offers_by_filter", filter, userId,],
    getUserOffers,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity, // ten minutes
    }
  );

  return { userOffers: data?.data, isLoading, error: data?.error };
};
