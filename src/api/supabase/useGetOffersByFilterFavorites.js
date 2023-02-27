import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";
import { useUserContext } from "../../context/user/userContext";

export const useGetOffersByFilterFavorites = (filter = {}) => {
  const { userId } = useUserContext();

  const getOfferCards = async () => {
    return supabase.rpc("get_offers_by_filter_favorites", {
      ...filter,
      user_id: userId,
    });
  };

  const { data, isLoading } = useQuery(
    ["get_offers_by_filter_favorites", filter, userId],
    getOfferCards,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );

  return { offers: data?.data ?? [], isLoading, error: data?.error };
};
