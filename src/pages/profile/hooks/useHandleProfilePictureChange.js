import { queryClient } from "../../../api/reactQuery/queryClient";
import { toastNotify } from "../../../components/toastNotify/toastNotify";
import { useUserContext } from "../../../context/user/userContext";
import { compressImages } from "../../../helpers/compressImages";
import { handleDefaultChange } from "../helpers/handleDefaultChange";
import { handleUserPPDelete } from "../helpers/handleUserPPDelete";
import { handleUserPPUpload } from "../helpers/handleUserPPUpload";

export const useHandleProfilePictureChange = () => {
  const { userId, dispatchUser, profilePictureUrl } = useUserContext();
  const { notifyStandard } = toastNotify();

  const handleProfilePicture = async (e) => {
    let pictures = await compressImages({
      images: e.target.files,
      maxSize: 1,
      height: 1400,
      width: 1400,
    });

    // change name
    pictures[0].name = `${userId}.webp`;

    // delete old image in the bucket
    const { deleteData } = await handleUserPPDelete(pictures[0]);

    // upload new image in the bucket
    await handleUserPPUpload(pictures[0]);

    // no data such data by the name of existed
    if (deleteData.length === 0) {
      // meaning the user still has the default profile picture, update the users table specifically the current users profile picture url
      const { updateError } = handleDefaultChange(userId);
      if (updateError) console.error(updateError);

      dispatchUser({
        type: "SET_USER_PROFILE_PICTURE_URL",
        payload: `https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/user-avatars/${userId}.webp`,
      });

      return;
    }

    notifyStandard({
      information: {
        type: "success",
        content: "Profile Picture was changed. Hard Reload is needed to see the changes.",
      },
      id: "ppu change",
    });

    queryClient.invalidateQueries(["get_user_with_preferred_city", userId]);
  };

  return { handleProfilePicture };
};
