import { updateProfile } from "firebase/auth";
import { auth } from "../../../../firebase.config";

export const updateAuthPhoneNumber = async (phoneNumber) => {
  await updateProfile(auth.currentUser, {
    phoneNumber,
  }).catch((error) => {
    // todo: toast, could not update phone number
    console.log(error.message);
  });
};
