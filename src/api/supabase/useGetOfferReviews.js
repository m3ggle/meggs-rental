import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";

export const useGetOfferReviews = (offerId) => {
  const getReviews = async () => {
    if (offerId !== null) {
      return supabase.rpc("get_offer_rs_reviews", {
        oid: offerId,
      });
    }
    return { error: null, data: null };
  };

  const { data, isLoading } = useQuery(
    ["get_offer_rs_reviews", offerId],
    getReviews,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: 120000, // two minutes
    }
  );

  return { reviews: data?.data, isLoading, error: data?.error };
};
