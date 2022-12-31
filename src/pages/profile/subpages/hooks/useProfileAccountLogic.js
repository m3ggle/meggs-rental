import { useEffect } from "react";
import { useUserContext } from "../../../../context/user/userContext";
import { handlePreparationProfileAccount } from "../helper/handlePreparationProfileAccount";
import { updateAuthProfileAccount } from "../helper/updateAuthProfileAccount";

export const useProfileAccountLogic = () => {
  const { userData, dispatchUser } = useUserContext();

  const onSubmit = async (formData) => {
    if (Object.keys(formData).includes("firstName")) {
      // prep
      const { modifiedUserData } = handlePreparationProfileAccount({
        formData,
        userData,
      });

      // compare
      const isTheSame =
        JSON.stringify(formData) === JSON.stringify(modifiedUserData);

      // actual action
      if (!isTheSame) {
        // update firstName (displayName) and phoneNumber
        await updateAuthProfileAccount({ formData, userData });

        dispatchUser({ type: "SET_USER", payload: formData });
      }
    }
  };

  // for preferred city, little special treatment
  const autocompleteCallback = (formData) => {
    const preferredCity = {
      name: formData.name,
      bounds: formData.extraInfo.bounds,
      center: formData.extraInfo.center,
    };
    localStorage.setItem("accountPreferredCity", JSON.stringify(preferredCity));
  };

  useEffect(() => {
    if (userData !== null) {
      localStorage.setItem(
        "accountPreferredCity",
        JSON.stringify(userData.preferredCity)
      );
    }
  }, [userData]);

  return { onSubmit, autocompleteCallback };
};
