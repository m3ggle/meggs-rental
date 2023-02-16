import supabase from "../../../config/supabaseClient";

export const uploadOfferPictures = async ({ offerId, pictures }) => {
  const pictureUrls = await Promise.all(
    pictures.map((picture) => {
      return supabase.storage
        .from("user-offers")
        .upload(`${offerId}/${picture.name.split(".")[0]}.webp`, picture, {
          cacheControl: "3600",
          upsert: true,
          contentType: "image/webp",
        });
    })
  );

  return { pictureUrls };
};
