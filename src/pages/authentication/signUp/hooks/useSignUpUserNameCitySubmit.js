import supabase from "../../../../config/supabaseClient";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";
import { useMultiStepHelper } from "../../../../hooks/useMultiStepHelper";
import { useSignUpUserNameCityHelpers } from "./useSignUpUserNameCityHelpers";

export const useSignUpUserNameCitySubmit = () => {
  const { notifyUserNameExist } = useSignUpUserNameCityHelpers();
  const { handleStorage } = useMultiStepHelper();
  const { getSingleParam, setSingleParam } = useUrlManipulation();

  const onSubmit = async (data) => {
    let { data: userNameExists } = await supabase.rpc("check_user_name_taken", {
      user_name: data.userName,
    });

    if (!userNameExists) {
      handleStorage(data, "signUpData");
      setSingleParam("round", +getSingleParam("round") + 1);
      return;
    }

    notifyUserNameExist();
  };

  return { onSubmit };
};
