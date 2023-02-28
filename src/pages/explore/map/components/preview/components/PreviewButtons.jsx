import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../../../../../components/common/Btn";
import { useChatInputModalContext } from "../../../../../../context/chatInputModalContext/chatInputModalContext";
import { useUserContext } from "../../../../../../context/user/userContext";
import { useNavigateToChat } from "../../../../../../hooks/useNavigateToChat";

const PreviewButtons = ({ offerInformation }) => {
  const { offer_basics, offer_owner } = offerInformation;
  const { id } = offer_basics;
  const { owner_id, profile_picture_url, user_name, is_online, last_online } =
    offer_owner;

  const { openModal } = useChatInputModalContext();
  const { userId, profilePictureUrl, userName } = useUserContext();

  const navigate = useNavigate();
  const handleViewOffer = () => navigate(`/offer-details/${id}`);
  const { navigateToChat } = useNavigateToChat();

  const handleChat = () => {
    console.log("open chat modal");

    // call supabase
    const chatroomId = null;

    if (chatroomId !== null) {
      navigateToChat({ chatId: chatroomId, offerId: id });
      return;
    }

    const prep = {
      chatroomId,
      offerId: id,
      ownerInformation: {
        userId: owner_id,
        profilePictureUrl: profile_picture_url,
        userName: user_name,
        isOnline: is_online,
        lastOnline: last_online,
      },
      borrowerInformation: {
        userId,
        profilePictureUrl,
        userName,
      },
    };

    openModal(prep);
  };

  return (
    <div className="flex w-full gap-x-2">
      <Btn
        onClick={handleViewOffer}
        uiType="secondary"
        type="button"
        title="View full Offer"
      />
      {userId !== owner_id && (
        <Btn
          onClick={handleChat}
          uiType="primary"
          type="button"
          title="Contact Owner"
        />
      )}
    </div>
  );
};

export default PreviewButtons;
