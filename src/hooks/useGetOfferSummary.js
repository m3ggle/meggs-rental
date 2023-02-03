import { useQuery } from "react-query";
import supabase from "../config/supabaseClient";

export const useGetOfferSummary = (offerId) => {
  const getSummary = async () => {
    if (offerId !== null) {
      return supabase.rpc("get_offer_rs_summary", {
        oid: offerId,
      });
    }
    return { error: null, data: null };
  };

  const { data, isLoading } = useQuery(
    ["get_offer_rs_summary", offerId],
    getSummary,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: 120000, // two minutes
    }
  );

  return { summary: data?.data, isLoading, error: data?.error };
};
