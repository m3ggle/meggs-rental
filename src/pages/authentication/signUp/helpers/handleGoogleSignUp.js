import supabase from "../../../../config/supabaseClient";

export const handleGoogleSignUp = async () => {
  const { data: googleData, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo:
        "https://meggsrental.netlify.app/sign-up/google-callback",
    },
  });

  if (error) {
    console.log(error);
    return;
  }
  console.log(googleData);
};
