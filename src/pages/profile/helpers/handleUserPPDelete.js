import supabase from "../../../config/supabaseClient";

export const handleUserPPDelete = async (pictureName) => {
  const { data: deleteData, error: deleteError } = await supabase.storage
    .from("user-avatars")
    .remove(pictureName);

  return { deleteData, deleteError };
};