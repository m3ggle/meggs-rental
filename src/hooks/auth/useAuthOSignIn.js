import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { notifySupabaseError } from "../../components/toastNotify/notifySupabaseError";
import { toastNotify } from "../../components/toastNotify/toastNotify";
import supabase from "../../config/supabaseClient";
import { useUserContext } from "../../context/user/userContext";
import { sqlToJsObject } from "../../helpers/sqlToJsSyntax";
import { toDesirableStructure } from "./helpers/toDesirableStructure";

export const useAuthOSignIn = () => {
  const { dispatchUser } = useUserContext();
  const [userIdSignIn, setUserIdSignIn] = useState(null);
  const { notifyStandard } = toastNotify();
  const navigate = useNavigate();

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
    if (data === null) {
      return;
    }

    if (data.error !== null) {
      notifyStandard({
        information: {
          type: "info",
          content: "Signed in but incomplete.",
        },
        id: "signInIncomplete",
      });
      navigate("/sign-up/google-callback");
      console.log(data.error);
      return;
    }

    if (data.data !== null) {
      let userData = sqlToJsObject(data.data);
      userData = toDesirableStructure(userData);

      dispatchUser({ type: "SET_USER_CONTEXT", payload: userData });
    }
  };

  const onErrorGetUserWPC = (error) => {
    notifySupabaseError({
      message: "Something went wrong getting signed in user.",
      code: "onErrorGetUserWPC",
    });
    console.log(error);
  };

  useQuery(["get_user_with_preferred_city", userIdSignIn], getUserWPC, {
    staleTime: 600000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    onSuccess: onSuccessGetUserWPC,
    onError: onErrorGetUserWPC,
  });

  return { userIdSignIn, setUserIdSignIn };
};
