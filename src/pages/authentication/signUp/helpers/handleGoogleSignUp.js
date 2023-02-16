import supabase from "../../../../config/supabaseClient";

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
  console.log(googleData);
};
