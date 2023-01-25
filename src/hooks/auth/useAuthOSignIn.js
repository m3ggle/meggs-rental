import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { notifySupabaseError } from "../../components/toastNotify/notifySupabaseError";
import supabase from "../../config/supabaseClient";
import { useUserContext } from "../../context/user/userContext";
import { sqlToJsObject } from "../../helper/sqlToJsSyntax";
import { toDesirableStructure } from "./helpers/toDesirableStructure";

export const useAuthOSignIn = () => {
  const { dispatchUser } = useUserContext();
  const [userIdSignIn, setUserIdSignIn] = useState(null);

  // for user context
  const getUserWPC = () => {
    if (userIdSignIn !== null) {
      return supabase.rpc("get_user_with_preferred_city", {
        uid: userIdSignIn,
      });
    }
    return null;
  };

  const onSuccessGetUserWPC = (data) => {
    if (data !== null) {
      let userData = data.data;
      userData = sqlToJsObject(userData);
      userData = toDesirableStructure(userData);

      dispatchUser({ type: "SET_USER_CONTEXT", payload: userData });
    }
  };

  const onErrorGetUserWPC = (error) => {
    notifySupabaseError(error);
    console.log(error);
  };

  useQuery(["get_user_with_preferred_city", userIdSignIn], getUserWPC, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    onSuccess: onSuccessGetUserWPC,
    onError: onErrorGetUserWPC,
  });

  // telling db the user is online (mutating db)
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
    if (userIdSignIn !== null) {
      setToOnline.mutate();
    }
  }, [userIdSignIn]);

  return { setUserIdSignIn };
};
