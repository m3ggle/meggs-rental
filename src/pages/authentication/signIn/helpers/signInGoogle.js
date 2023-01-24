import { toastNotify } from "../../../../components/toastNotify/toastNotify";
import supabase from "../../../../config/supabaseClient";

export const signInGoogle = async () => {
    const { notifyStandard } = toastNotify();
    
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/",
    },
  });

  if (error) {
    notifyStandard({
      information: {
        type: "warning",
        content: "Something went wrong",
      },
      id: "googleAccountCreation",
    });
    console.log(error);
    return;
  }

  notifyStandard({
    information: {
      type: "success",
      content: "You are logged in.",
    },
    id: "googleAccountCreation",
  });
};
