import { useNavigate } from "react-router-dom";
import { toastNotify } from "../../components/toastNotify/toastNotify";
import supabase from "../../config/supabaseClient";
import { useNavigationContext } from "../../context/navigation/navigationContext";
import { useUserContext } from "../../context/user/userContext";

export const useHandleSignOut = async () => {
  const { notifyStandard } = toastNotify();
  const { isOpen, dispatchNavigation } = useNavigationContext();
  const { userId } = useUserContext();
  const navigate = useNavigate();

  const displayNotify = (content, type = "waning", id = "SignOutError") => {
    notifyStandard({ information: { type, content }, id });
  };

  const handleSignOut = async () => {
    // supabase sign out
    const { errorSignOut } = await supabase.auth.signOut();

    if (errorSignOut) {
      displayNotify(errorSignOut.message);
      console.log("this is an error (signOut)", errorSignOut);
      return;
    }

    // db set user offline
    let { errorDb } = await supabase.rpc("update_user_offline", {
      uid: userId,
    });

    if (errorDb) {
      displayNotify(errorDb.message);
      console.log("this is an error (db)", errorDb);
      return;
    }

    // navbar close if open
    if (isOpen) { dispatchNavigation({ type: "CLOSE_NAVIGATION" }); }
      
    navigate("/sign-in")
  };

  return { handleSignOut, displayNotify };
};
