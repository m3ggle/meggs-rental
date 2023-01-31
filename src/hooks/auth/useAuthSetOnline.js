import { useEffect } from "react";
import { useMutation } from "react-query";
import { notifySupabaseError } from "../../components/toastNotify/notifySupabaseError";
import supabase from "../../config/supabaseClient";
import { useUserContext } from "../../context/user/userContext";
import { stripAnyWhiteSpace } from "../../helpers/stripAnyWhiteSpace";
import { useAuthOSignIn } from "./useAuthOSignIn";

export const useAuthSetOnline = () => {
  const {userId} = useUserContext()

  const handleDbUpdate = async () => {
    const uid = stripAnyWhiteSpace(userId)
      return supabase.rpc("update_user_online", {
        uid: uid,
      });
  };

  const dbUpdateError = () => {
    notifySupabaseError({ msg: "Could not update online status." });
  };

  const setToOnline = useMutation(handleDbUpdate, {
    mutationKey: `update_user_online_${userId}`,
    onError: dbUpdateError,
  });

  useEffect(() => {
    if (userId !== null) {
      setToOnline.mutate();
    }
  }, [userId]);
};
