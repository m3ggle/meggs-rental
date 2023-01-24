import { toastNotify } from "../../../../components/toastNotify/toastNotify";
import supabase from "../../../../config/supabaseClient";
import { stripAnyWhiteSpace } from "../../../../helper/stripAnyWhiteSpace";
import { useDebounce } from "../../../../hooks/useDebounce";

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
      console.log(data)
      const { preferredCity } = data;
      const { bounds } = preferredCity;
      const { north, east, south, west } = bounds;

      let location = {};
      location.city = stripAnyWhiteSpace(preferredCity.name.split(",")[0]);
      if (preferredCity.name.split(",").length === 3) {
        location.province = stripAnyWhiteSpace(preferredCity.name.split(",")[1]);
        location.country = stripAnyWhiteSpace(preferredCity.name.split(",")[2]);
      } else {
        location.province = stripAnyWhiteSpace(preferredCity.name.split(",")[0]);
        location.country = stripAnyWhiteSpace(preferredCity.name.split(",")[1]);
      }

      let userMetaData = {
        first_name: stripAnyWhiteSpace(data.firstName),
        last_name: stripAnyWhiteSpace(data.lastName),
        user_name: stripAnyWhiteSpace(data.userName),
        north,
        east,
        south,
        west,
        latitude: preferredCity.center.lat,
        longitude: preferredCity.center.lng,
        city: location.city,
        province: location.province,
        country: location.country,
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
