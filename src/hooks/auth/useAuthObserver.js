import { useEffect } from "react";
import supabase from "../../config/supabaseClient";
import { useAuthOSignIn } from "./useAuthOSignIn";
import { useAuthOSignOut } from "./useAuthOSignOut";

export const useAuthObserver = () => {
  const { setUserIdSignIn } = useAuthOSignIn();
  const { setToOffline } = useAuthOSignOut();

  // auth change
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUserIdSignIn(session.user.id);
      }
      if (event === "SIGNED_OUT") {
        console.log("sign out getriggert")
        setToOffline();
      }
    });
  }, [setUserIdSignIn]);
};
