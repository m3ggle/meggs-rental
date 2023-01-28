import { useEffect } from "react";
import { useMutation } from "react-query";
import { notifySupabaseError } from "../../components/toastNotify/notifySupabaseError";
import supabase from "../../config/supabaseClient";
import { useAuthOSignIn } from "./useAuthOSignIn";

export const useAuthSetOnline = () => {
  const { userIdSignIn } = useAuthOSignIn();

  const handleDbUpdate = async () => {
    return supabase.rpc("update_user_online", {
      uid: userIdSignIn,
    });
  };

  const dbUpdateError = () => {
    notifySupabaseError({ msg: "Could not update online status." });
  };

  const setToOnline = useMutation(handleDbUpdate, {
    mutationKey: `setOnline_${userIdSignIn}`,
    onError: dbUpdateError,
  });

  useEffect(() => {
    // when the id in this component state is not null, a user is currently signed in
    // and when the userId inside the user context is not null, meaning only when we were successfully able to get the user from the db
    if (userIdSignIn !== null) {
      setToOnline.mutate();
    }
  }, [userIdSignIn]);
};
