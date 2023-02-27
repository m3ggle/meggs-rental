import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";

export const useGetOffersByFilter = (filter = {}) => {
  const getOfferCards = async () => {
    // if (Object.keys(filter).length > 0) {
      return supabase.rpc("get_offers_by_filter", {
        ...filter,
      });
    // }
    // return { error: null, data: null };
  };

  const { data, isLoading } = useQuery(
    ["get_offer_cards", filter],
    getOfferCards,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );

  return { offers: data?.data ?? [], isLoading, error: data?.error };
};
