import { auth } from "../../firebase.config";

export const useSignOutAPI = () => {
  const signOutUser = () => {
    auth.signOut();
  };

  return { signOutUser };
};
