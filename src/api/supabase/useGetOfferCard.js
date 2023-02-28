import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";
import { useUserContext } from "../../context/user/userContext";

export const useGetOfferCard = (offerId) => {
  const { userId } = useUserContext();

  const getOfferCard = async () => {
    if (offerId !== null) {
      return supabase.rpc("get_offer_card", {
        oid: offerId,
        uid: userId,
      });
    }
    return { error: null, data: null };
  };

  const { data, isLoading } = useQuery(
    ["get_offer_card", offerId],
    getOfferCard,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity, // ten minutes
    }
  );

  return { offerInformation: data?.data, isLoading, error: data?.error };
};
