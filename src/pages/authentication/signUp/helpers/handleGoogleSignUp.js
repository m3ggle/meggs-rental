import { toastNotify } from "../../../../components/toastNotify/toastNotify";
import supabase from "../../../../config/supabaseClient";

const { notifyStandard } = toastNotify();

export const handleGoogleSignUp = async () => {
  const { data: googleData, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/sign-up/google-callback",
    },
  });

  if (error) {
    console.log(error);
    return;
  }

  notifyStandard({
    information: {
      type: "success",
      msg: "You are logged in",
    },
    id: "googleLogIn",
  });
  console.log(googleData);
};
