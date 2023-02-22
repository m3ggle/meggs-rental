import { queryClient } from "../../../api/reactQuery/queryClient";
import { toastNotify } from "../../../components/toastNotify/toastNotify";
import { useUserContext } from "../../../context/user/userContext";
import { compressImages } from "../../../helpers/compressImages";
import { handleProfilePictureChange } from "../helpers/handleProfilePictureChange";
import { handleProfilePicturePreparation } from "../helpers/handleProfilePicturePreparation";
import { handleUserPPDelete } from "../helpers/handleUserPPDelete";
import { handleUserPPUpload } from "../helpers/handleUserPPUpload";

export const useHandleProfilePictureChange = () => {
  const { userId, profilePictureUrl } = useUserContext();
  const { notifyStandard } = toastNotify();

  const handleProfilePicture = async (e) => {
    // preparations
    const { newName, newPPU, oldName, oldPPU } =
      handleProfilePicturePreparation(userId, profilePictureUrl);

    let pictures = await compressImages({
      images: e.target.files,
      maxSize: 1,
      height: 1400,
      width: 1400,
    });

    // change name
    pictures[0].name = newName;

    // upload new image in the bucket
    await handleUserPPUpload(pictures[0]);

    // updates the user (in sql table) profile picture to new one
    const { updateError } = await handleProfilePictureChange(userId, newPPU);
    if (updateError) {
      console.error(updateError);
      return;
    }

    if (!oldPPU.includes("user-default")) {
      // delete old image in the bucket
      await handleUserPPDelete(oldName);
    }

    notifyStandard({
      information: {
        type: "success",
        content:
          "Profile Picture was changed.",
      },
      id: "ppu change",
    });

    queryClient.invalidateQueries(["get_user_with_preferred_city", userId]);
  };

  return { handleProfilePicture };
};
