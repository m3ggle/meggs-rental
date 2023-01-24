import supabase from "../../../../../config/supabaseClient";

export const signUpGoogleGetCurrentUser = async (setUid, setValue) => {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.log(error);
    return;
  };
  setValue("email", data.session.user.email);
  setUid(data.session.user.id);
};
