import supabase from "../../../config/supabaseClient";

export const handleProfilePictureChange = async (userId, pictureUrl) => {
  let { data: updateData, error: updateError } = await supabase.rpc(
    "update_user_profile_picture_url",
    {
      picture_url: pictureUrl,
      uid: userId,
    }
  );

  return { updateData, updateError };
};