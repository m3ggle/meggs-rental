import { useEffect } from "react";
import { useUserContext } from "../../../../context/user/userContext";
import { handlePreparationProfileAccount } from "../helper/handlePreparationProfileAccount";
import { updateAuthProfileAccount } from "../helper/updateAuthProfileAccount";

export const useProfileAccountLogic = () => {
  const { userData, dispatchUser } = useUserContext();

  const onSubmit = async (formData) => {
    if (Object.keys(formData).includes("firstName")) {
      // prep
      const { newPassword, oldPassword, modifiedUserData } =
        handlePreparationProfileAccount({ formData, userData });

      // compare
      const isTheSame =
        JSON.stringify(formData) === JSON.stringify(modifiedUserData);

      // actual action
      if (!isTheSame) {
        const result = await updateAuthProfileAccount({
          formData,
          userData,
          newPassword,
          oldPassword,
        });

        // result is undefined if everything goes alright and error or something else if there is a problem
        if (result === undefined) {
          dispatchUser({
            type: "SET_USER",
            payload: formData,
          });
          return
        }
        
        console.log("result: " + result.message);
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
