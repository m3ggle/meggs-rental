import { updateProfile } from "firebase/auth";
import { auth } from "../../../../firebase.config";

export const updateAuthDisplayName = async (displayName) => {
  // firstName
  await updateProfile(auth.currentUser, {
    displayName,
  }).catch((error) => {
    // todo: toast, could not update firstName
    console.log(error.message);
  });
};
