import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";

export const useGetOfferCards = (offerIds) => {
  const getOfferCards = async () => {
    if (offerIds !== null) {
      return supabase.rpc("get_offer_cards", {
        offer_ids: offerIds,
      });
    }
    return { error: null, data: null };
  };

  const { data, isLoading } = useQuery(
    ["get_offer_cards", offerIds],
    getOfferCards,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );

  return { offers: data?.data ?? [], isLoading, error: data?.error };
};
