import supabase from "../../../config/supabaseClient";

export const handleDefaultChange = async (uid) => {
  let { data: updateData, error: updateError } = await supabase.rpc(
    "update_user_profile_picture_url",
    {
      picture_url: `https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/user-avatars/${uid}.webp`,
      uid,
    }
  );

  return { updateData, updateError };
};