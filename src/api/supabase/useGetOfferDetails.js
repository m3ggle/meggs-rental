import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";

export const useGetOfferDetails = (offerId) => {
  const getOfferDetails = async () => {
    if (offerId !== null) {
      return supabase.rpc("get_offer_details", {
        oid: offerId,
      });
    }
    return { error: null, data: null };
  };

  const { data, isLoading } = useQuery(
    ["get_offer_details", offerId],
    getOfferDetails,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity, // ten minutes
    }
  );

  return { offerInformation: data?.data, isLoading, error: data?.error };
};
