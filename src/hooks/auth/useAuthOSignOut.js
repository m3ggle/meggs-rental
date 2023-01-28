import { notifySupabaseError } from "../../components/toastNotify/notifySupabaseError";
import { toastNotify } from "../../components/toastNotify/toastNotify";
import supabase from "../../config/supabaseClient";
import { useUserContext } from "../../context/user/userContext";

export const useAuthOSignOut = () => {
  const { dispatchUser, userId } = useUserContext();
  const { notifyStandard } = toastNotify();

  // context
  const handleContext = () => {
    dispatchUser({ type: "SET_USER_CONTEXT_DEFAULT", payload: null });
  };

  // mutating
  const handleDbUpdate = async () => {
    const { error } = await supabase.rpc("update_user_offline", {
      uid: userId,
    });
    if (error) {
      notifySupabaseError({ message: "Could not update offline status." });
      console.log(error);
      return;
    }
    notifyStandard({
      information: { type: "success", content: "Your are signed out." },
      id: "signOut",
    });
  };

  const setToOffline = async () => {
    if (userId !== null) {
      handleDbUpdate();
      handleContext();
    }
  };

  return { setToOffline };
};
