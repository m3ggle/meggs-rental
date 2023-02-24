import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";

export const useGetOfferNameAutocomplete = (offerNameInput = "") => {
  const getOffer = async () => {
    if (offerNameInput !== null && offerNameInput.length > 0) {
      return supabase.rpc("fuzzy_search_offer_name", {
        offn: offerNameInput,
      });
    }
    return { error: null, data: [] };
  };

  const { data, isLoading } = useQuery(
    ["fuzzy_search_offer_name", offerNameInput],
    getOffer,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: 300000, // ten minutes
    }
  );

  return { offers: data?.data ?? [], isLoading, error: data?.error };
};
