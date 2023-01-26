import { useMutation } from "react-query";
import { toastNotify } from "../../../../../components/toastNotify/toastNotify";
import supabase from "../../../../../config/supabaseClient";

export const useUpdatePreferredCity = () => {
  const { notifyStandard } = toastNotify();

  const handlePCUpdate = (data) =>
    supabase.rpc("update_user_preferred_city", data);
  const handlePCUpdateError = (error) => {
      console.log(error);
      notifyStandard({
      information: {
        type: "warning",
        content: "Preferred City could not be updated",
      },
      id: "personalInformationPC",
    });
  };
  const handlePCUpdateSuccess = () => {
    notifyStandard({
      information: {
        type: "success",
        content: "Preferred City was updated",
      },
      id: "personalInformationPC",
    });
  };
  const updatePreferredCity = useMutation(handlePCUpdate, {
    mutationKey: "personal_information_upload",
    onSuccess: handlePCUpdateSuccess,
    onError: handlePCUpdateError,
  });

  return { updatePreferredCity };
};
