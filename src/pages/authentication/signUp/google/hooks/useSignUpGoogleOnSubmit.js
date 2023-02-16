import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate()

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
    
    userData.phone = null
    userData.email_confirmed = true
    userData.phone_confirmed = false

    const { error } = await supabase.rpc(
      "upload_new_user",
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
      console.log(error)
      return;
    }

    notifyStandard({
      information: {
        type: "success",
        content: "Account was created.",
      },
      id: "googleAccountCreation",
    });

    navigate('/homepage')
  };

  return { onSubmit };
};
