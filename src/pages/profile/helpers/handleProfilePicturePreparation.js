export const handleProfilePicturePreparation = (userId, profilePictureUrl) => {
  const prox =
    "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/user-avatars/";
  const oldName = profilePictureUrl.split("user-avatars/")[1];
  const oldPPU = profilePictureUrl;
  const currentDate = new Date().toISOString().replace(/[-T:\.Z]/g, "");
  const newName = `${userId}${currentDate}.webp`;
  const newPPU = `${prox}${newName}`;

  return { oldName, oldPPU, newName, newPPU };
};
