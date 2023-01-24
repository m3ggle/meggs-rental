import { toastNotify } from "../../../../../components/toastNotify/toastNotify";
import supabase from "../../../../../config/supabaseClient";
import { useSignUpEmailPasswordHelpers } from "../../hooks/useSignUpEmailPasswordHelpers";
import { useSignUpUserNameCityHelpers } from "../../hooks/useSignUpUserNameCityHelpers";
import { useSignUpUserNameCitySubmit } from "../../hooks/useSignUpUserNameCitySubmit";

export const useSignUpGoogleOnSubmit = ({ uid, preferredCity }) => {
  const { notifyStandard } = toastNotify();
  const { notifyUserNameExist } = useSignUpUserNameCityHelpers();
  const { handleCityDefault } = useSignUpUserNameCitySubmit();
  const { handleSignUpPreparation } = useSignUpEmailPasswordHelpers();

  const onSubmit = async (data) => {
    // checks
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
      const defaultCity = handleCityDefault();
      data.preferredCity = defaultCity.preferredCity;
    } else {
      data.preferredCity = preferredCity;
    }

    let userData = handleSignUpPreparation(data);
    userData.uid = uid;
    userData.email = data.email;

    const { data: uploadResult, error } = await supabase.rpc(
      "upload_user_google",
      userData
    );

    if (error) {
      notifyStandard({
        information: {
          type: "warning ",
          content: "Something went wrong.",
        },
        id: "googleAccountCreation",
      });
      return;
    }

    if (uploadResult.fail != null) {
      notifyStandard({
        information: {
          type: "warning",
          content: uploadResult.fail,
        },
        id: "googleAccountCreation",
      });
      return
    }

    notifyStandard({
      information: {
        type: "success",
        content: "Account was created.",
      },
      id: "googleAccountCreation",
    });
  };

  return { onSubmit };
};
