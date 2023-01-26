import { useMutation } from "react-query";
import { toastNotify } from "../../../../../components/toastNotify/toastNotify";
import supabase from "../../../../../config/supabaseClient";

export const useUpdatePersonalInformation = () => {
  const { notifyStandard } = toastNotify();

  const handlePIUpdate = (data) =>
    supabase.rpc("update_user_personal_information", data);
  const handlePIUpdateError = (error) => {
    console.log(error);
    notifyStandard({
      information: {
        type: "warning",
        content: "Personal Information could not be updated",
      },
      id: "personalInformationPI",
    });
  };
  const handlePIUpdateSuccess = () => {
    notifyStandard({
      information: {
        type: "success",
        content: "Personal Information was updated",
      },
      id: "personalInformationPI",
    });
  };
  const updatePersonalInformation = useMutation(handlePIUpdate, {
    mutationKey: "personal_information_upload",
    onError: handlePIUpdateError,
    onSuccess: handlePIUpdateSuccess,
  });

  return { updatePersonalInformation };
};
