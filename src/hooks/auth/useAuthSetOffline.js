import { useEffect } from "react";
import { useMutation } from "react-query";
import { notifySupabaseError } from "../../components/toastNotify/notifySupabaseError";
import { toastNotify } from "../../components/toastNotify/toastNotify";
import supabase from "../../config/supabaseClient";
import { useUserContext } from "../../context/user/userContext";
import { stripAnyWhiteSpace } from "../../helpers/stripAnyWhiteSpace";

export const useAuthSetOffline = () => {
  const { userId } = useUserContext();
  const { notifyStandard } = toastNotify();

  const handleDbUpdate = async () => {
    console.log(userId)
    const uid = stripAnyWhiteSpace(userId);
    return supabase.rpc("update_user_offline", {
      uid: uid,
    });
  };

  const onError = () => {
    notifySupabaseError({ message: "Could not update online status." });
  };

  const onSuccess = () => {
    notifyStandard({
      information: { type: "success", content: "Your are signed out." },
      id: "signOut",
    });
  };

  const setToOffline = useMutation(handleDbUpdate, {
    mutationKey: `update_user_offline_${userId}`,
    onError,
    onSuccess,
  });

  // when the user closes the window/tab/app without logging out
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      if (userId !== null) {
        setToOffline.mutate();
      }
    });
  }, [setToOffline, userId]);

  return { setToOffline };
};
