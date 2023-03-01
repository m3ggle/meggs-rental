import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";
import { useUserContext } from "../../context/user/userContext";

export const useGetOfferDetails = (offerId) => {
  const { userId } = useUserContext();

  const getOfferDetails = async () => {
    if (offerId !== null) {
      console.log("calling supabase")
      return supabase.rpc("get_offer_details", {
        oid: offerId,
        uid: userId,
      });
    }
    return { error: null, data: null };
  };

  const { data, isLoading } = useQuery(
    ["get_offer_details", offerId, userId],
    getOfferDetails,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity, // ten minutes
    }
  );

  return { offerInformation: data?.data, isLoading, error: data?.error };
};
