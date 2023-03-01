import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";
import { useUserContext } from "../../context/user/userContext";

export const useGetOffersByFilter = (filter = {}) => {
  const { userId } = useUserContext();

  const getOfferCards = async () => {
    console.log(filter)
    return supabase.rpc("get_offers_by_filter", {
      ...filter,
    });
  };

  const { data, isLoading } = useQuery(
    ["get_offers_by_filter", filter, userId],
    getOfferCards,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      // staleTime: Infinity,
    }
  );


  return { offers: data?.data ?? [], isLoading, error: data?.error };
};
