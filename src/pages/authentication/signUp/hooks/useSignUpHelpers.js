import { toastNotify } from "../../../../components/toastNotify/toastNotify";
import supabase from "../../../../config/supabaseClient";
import { useDebounce } from "../../../../hooks/useDebounce";

export const useSignUpHelpers = () => {
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
    data && displayNotify("This email already exists.");
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

  const checkSignUpFormData = (formData) => {
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
    if (formData.email === undefined) {
      displayNotify("Email name is missing");
      return false;
    }
    if (formData.password === undefined) {
      displayNotify("Password name is missing");
      return false;
    }
    return true;
  };

  return {
    handleEmailChange,
    handleEmailCheckCall,
    displayNotify,
    checkSignUpFormData,
  };
};
