import { updateProfile } from "firebase/auth";
import { toastNotify } from "../../../../components/toastNotify/toastNotify";
import { auth } from "../../../../firebase.config";

export const updateAuthDisplayName = async (displayName) => {
  const { notifyStandard } = toastNotify();

  // firstName
  await updateProfile(auth.currentUser, {
    displayName,
  }).catch((error) => {
    notifyStandard({
      information: {
        type: "warning",
        content: "Could not update change",
      },
      id: "firstNameError",
    });
    console.log(error.message);
  });
};
