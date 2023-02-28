import { getChatroomId } from "../api/supabase/getChatroomId";
import { useChatInputModalContext } from "../context/chatInputModalContext/chatInputModalContext";
import { useNavigateToChat } from "./useNavigateToChat";

export const useHandleContactOwner = () => {
  const { openModal } = useChatInputModalContext();
  const { navigateToChat } = useNavigateToChat();

  const handleContactOwner = async ({
    offerId = "",
    ownerInformation = {
      userId: null,
      profilePictureUrl: null,
      userName: null,
      isOnline: null,
      lastOnline: null,
    },
    borrowerInformation = {
      userId: null,
      profilePictureUrl: null,
      userName: null,
    },
  }) => {
    // calling supabase
    const chatroomId = await getChatroomId({
      offerId,
      ownerId: ownerInformation.userId,
      borrowerId: borrowerInformation.userId,
    });

    if (chatroomId !== null) {
      navigateToChat({ chatroomId, offerId });
      return;
    }

    openModal({ chatroomId, offerId, ownerInformation, borrowerInformation });
  };

  return { handleContactOwner };
};
