import { toastNotify } from "../../../../components/toastNotify/toastNotify";
import supabase from "../../../../config/supabaseClient";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";
import { useDebounce } from "../../../../hooks/useDebounce";
import { useMultiStepHelper } from "../../../../hooks/useMultiStepHelper";

export const useSignUpUserNameCityHelpers = () => {
  const { notifyStandard } = toastNotify();
  const { handleStorage } = useMultiStepHelper();
  const { debounce } = useDebounce();
  const { getSingleParam, setSingleParam } = useUrlManipulation();

  const notifyUserNameExist = () => {
    notifyStandard({
      information: {
        type: "warning",
        content: "Username already exits",
      },
      id: "userNameExists",
    });
  };

  // todo: old version, solve it with url manipulation
  const handleGoBack = () => {
    setSingleParam("round", +getSingleParam("round") - 1);
  };

  // autocomplete stuff
  const autocompleteCallback = (data) => {
    const preferredCity = {
      name: data.name,
      bounds: data.extraInfo.bounds,
      center: data.extraInfo.center,
    };
    handleStorage({ preferredCity }, "signUpData");
  };

  const handleCall = async (e) => {
    let { data } = await supabase.rpc("check_user_name_taken", {
      user_name: e.target.value,
    });

    data && notifyUserNameExist();
  };
  const handleUserNameChange = debounce((e) => handleCall(e), 800);

  return {
    notifyUserNameExist,
    handleGoBack,
    autocompleteCallback,
    handleUserNameChange,
  };
};
