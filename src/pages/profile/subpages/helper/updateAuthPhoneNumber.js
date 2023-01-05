import { updateProfile } from "firebase/auth";
import { toastNotify } from "../../../../components/toastNotify/toastNotify";
import { auth } from "../../../../firebase.config";

export const updateAuthPhoneNumber = async (phoneNumber) => {
  const { notifyStandard } = toastNotify();

  // Todo: toast for success
  await updateProfile(auth.currentUser, {
    phoneNumber,
  }).catch((error) => {
    notifyStandard({
      information: {
        type: "warning",
        content: "Could not update changes",
      },
      id: "updatePhoneError",
    });
    console.log(error.message);
  });
};
