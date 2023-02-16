import supabase from "../../../../config/supabaseClient";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";
import { useMultiStepHelper } from "../../../../hooks/useMultiStepHelper";
import { useSignUpUserNameCityHelpers } from "./useSignUpUserNameCityHelpers";

export const useSignUpUserNameCitySubmit = () => {
  const { notifyUserNameExist } = useSignUpUserNameCityHelpers();
  const { handleStorage } = useMultiStepHelper();
  const { getSingleParam, setSingleParam } = useUrlManipulation();

  const onSubmitBody = async (data) => {
    let { data: userNameExists } = await supabase.rpc("check_user_name_taken", {
      user_name: data.userName,
    });

    if (userNameExists) {
      notifyUserNameExist();
      return;
    }

    // if no city, set it to berlin
    if (!data.city) {
      data.city = "Berlin, Germany";
      handleStorage(handleCityDefault(), "signUpData");
    }

    handleStorage(data, "signUpData");
    return data
  };

  const onSubmit = async (data) => {
    onSubmitBody(data);
    setSingleParam("round", +getSingleParam("round") + 1);
  };

  const handleCityDefault = () => {
    const preferredCity = {
      bounds: {
        north: 52.675502098,
        east: 13.761131097,
        south: 52.338260903,
        west: 13.088359904,
      },
      center: {
        lat: 52.5170365,
        lng: 13.3888599,
      },
      name: "Berlin, Germany",
    };

    return { preferredCity };
  };

  return { onSubmit, onSubmitBody, handleCityDefault };
};
