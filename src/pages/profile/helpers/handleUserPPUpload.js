import supabase from "../../../config/supabaseClient";

export const handleUserPPUpload = async (picture) => {
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("user-avatars")
      .upload(picture.name, picture, {
        cacheControl: "3600",
        upsert: false,
        contentType: "image/webp",
      });

    return { uploadData, uploadError };
  };