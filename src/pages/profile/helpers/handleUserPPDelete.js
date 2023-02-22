import supabase from "../../../config/supabaseClient";

export const handleUserPPDelete = async (picture) => {
  const { data: deleteData, error: deleteError } = await supabase.storage
    .from("user-avatars")
    .remove(picture.name);

  return { deleteData, deleteError };
};
