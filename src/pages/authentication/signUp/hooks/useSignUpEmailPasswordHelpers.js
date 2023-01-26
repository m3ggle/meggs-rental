import { toastNotify } from "../../../../components/toastNotify/toastNotify";
import supabase from "../../../../config/supabaseClient";
import { stripAnyWhiteSpace } from "../../../../helpers/stripAnyWhiteSpace";
import { useDebounce } from "../../../../hooks/useDebounce";
import { handlePreferredCity } from "../helpers/handlePreferredCity";

export const useSignUpEmailPasswordHelpers = () => {
  const { debounce } = useDebounce();
  const { notifyStandard } = toastNotify();

  const handleEmailChange = debounce(
    (e) => handleEmailCheckCall(e.target.value),
    800
  );

  const handleEmailCheckCall = async (email) => {
    let { data } = await supabase.rpc("check_email_taken", {
      email,
    });
    return data;
  };

  const displayNotify = (msg, id = "signUp") => {
    notifyStandard({
      information: {
        type: "warning",
        content: msg,
      },
      id,
    });
  };

  const checkSignUpFormData = (formData, full = false) => {
    if (formData.userName === undefined) {
      displayNotify("User name is missing");
      return false;
    }
    if (formData.firstName === undefined) {
      displayNotify("First name is missing");
      return false;
    }
    if (formData.lastName === undefined) {
      displayNotify("Last name is missing");
      return false;
    }
    if (formData.email === undefined && full) {
      displayNotify("Email name is missing");
      return false;
    }
    if (formData.password === undefined && full) {
      displayNotify("Password name is missing");
      return false;
    }
    return true;
  };

  const handleSignUpPreparation = (data) => {
    const preferredCity = handlePreferredCity(data.preferredCity)

    let userMetaData = {
      first_name: stripAnyWhiteSpace(data.firstName),
      last_name: stripAnyWhiteSpace(data.lastName),
      user_name: stripAnyWhiteSpace(data.userName),
      ...preferredCity,
    };

    return userMetaData;
  };

  return {
    handleEmailChange,
    handleEmailCheckCall,
    displayNotify,
    checkSignUpFormData,
    handleSignUpPreparation,
  };
};
