import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../../../../../components/common/Btn";
import { useUserContext } from "../../../../../../context/user/userContext";
import { useHandleContactOwner } from "../../../../../../hooks/useHandleContactOwner";

const PreviewButtons = ({ offerInformation }) => {
  const { offer_basics, offer_owner } = offerInformation;
  const { id } = offer_basics;
  const { owner_id, profile_picture_url, user_name, is_online, last_online } =
    offer_owner;

  const { userId, profilePictureUrl, userName } = useUserContext();

  const navigate = useNavigate();
  const handleViewOffer = () => navigate(`/offer-details/${id}`);
  const { handleContactOwner } = useHandleContactOwner();

  const handleContactClick = async () => {
    const prep = {
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

    handleContactOwner(prep);
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
          onClick={handleContactClick}
          uiType="primary"
          type="button"
          title="Contact Owner"
        />
      )}
    </div>
  );
};

export default PreviewButtons;
