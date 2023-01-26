import { notifySupabaseError } from "../../components/toastNotify/notifySupabaseError";
import supabase from "../../config/supabaseClient";
import { useUserContext } from "../../context/user/userContext";

export const useAuthOSignOut = () => {
  const { dispatchUser, userId } = useUserContext();

  // context
  const handleContext = () => {
    if (userId !== undefined) {
      dispatchUser({ type: "SET_USER_CONTEXT", payload: null });
    }
  };

  // mutating
  const handleDbUpdate = async (uid) => {
    const { error } = await supabase.rpc("update_user_offline", {
      uid,
    });
    if (error) {
      notifySupabaseError({ msg: "Could not update offline status." });
      console.log(error);
    }
  };

  const setToOffline = async () => {
    if (userId !== undefined) {
      // handleContext();
      // handleDbUpdate(userId);
    } else {
    }
  };

  return { setToOffline };
};
