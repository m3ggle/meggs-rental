import { useMutation, useQuery } from "react-query";
import supabase from "../../config/supabaseClient";
import { useUserContext } from "../../context/user/userContext";
import { useUpdateOfferViewCount } from "./useUpdateOfferViewCount";

export const useGetOfferDetails = (offerId) => {
  const { userId } = useUserContext();
  const { debouncedMutate } = useUpdateOfferViewCount({ offerId });


  const getOfferDetails = async () => {
    if (offerId !== null) {
      debouncedMutate();
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
