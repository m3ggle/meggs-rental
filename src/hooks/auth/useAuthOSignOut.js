import { useUserContext } from "../../context/user/userContext";
import { useAuthSetOffline } from "./useAuthSetOffline";

export const useAuthOSignOut = () => {
  const { dispatchUser, userId } = useUserContext();
  const { setToOffline } = useAuthSetOffline();

  // context
  const handleContext = () => {
    dispatchUser({ type: "SET_USER_CONTEXT_DEFAULT", payload: null });
  };

  const finishSignOut = async () => {
    if (userId !== null) {
      setToOffline.mutate();
      handleContext();
    }
  };

  return { finishSignOut };
};
