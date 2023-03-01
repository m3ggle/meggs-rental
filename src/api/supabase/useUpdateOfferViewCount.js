import { useCallback } from "react";
import { useMutation } from "react-query";
import { toastNotify } from "../../components/toastNotify/toastNotify";
import supabase from "../../config/supabaseClient";
import { useUserContext } from "../../context/user/userContext";
import { useDebounce } from "../../hooks/useDebounce";
import { queryClient } from "../reactQuery/queryClient";

export const useUpdateOfferViewCount = ({ offerId }) => {
    const { userId } = useUserContext();
    const { debounce } = useDebounce();
  const { notifyStandard } = toastNotify();

  const updateOfferViewCount = useCallback(() => {
    return supabase.rpc("update_offer_view_count", {
      offer_id: offerId,
    });
  }, [offerId]);


  const onSuccess = () => {
    queryClient.setQueryData(
      ["get_offer_details", offerId, userId],
      (cachedData) => {
        const offer_basics = cachedData.data.offer_basics;

        const updatedData = {
          ...cachedData,
          data: {
            ...cachedData.data,
            offer_basics: {
              ...offer_basics,
              view_count: offer_basics.view_count + 1,
            },
          },
        };
        return updatedData;
      }
    );
  };

  const onError = (error) => {
    console.log("view_count error", error);
    notifyStandard({
      information: {
        type: "error",
        content: "Could not update view count.",
      },
      id: "view_count",
    });
  };

  const { mutate: mutateViewCount } = useMutation(updateOfferViewCount, {
    onSuccess,
    onError,
  });

  const debouncedMutate = useCallback(debounce(mutateViewCount, 10000), [
    mutateViewCount,
  ]);

  return { debouncedMutate };
};
