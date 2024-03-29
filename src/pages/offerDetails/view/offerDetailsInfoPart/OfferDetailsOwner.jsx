import React from "react";
import UserProfileBig from "../../../../components/userProfile/UserProfileBig";
import { useNotifyModalContext } from "../../../../context/notifyModal/notifyModalContext";
import { useUserContext } from "../../../../context/user/userContext";
import { useHandleContactOwner } from "../../../../hooks/useHandleContactOwner";

const OfferDetailsOwner = ({ offerInformation }) => {
  const { offer_owner, offer_basics } = offerInformation;

  const { userId, profilePictureUrl, userName } = useUserContext();
  const { handleContactOwner } = useHandleContactOwner();
  const { openAuthNotifyModal } = useNotifyModalContext();

  const handleContactClick = async () => {
    if (userId === null) {
      openAuthNotifyModal();
      return;
    }

    const prep = {
      offerId: offer_basics.id,
      ownerInformation: {
        userId: offer_owner.owner_id,
        profilePictureUrl: offer_owner.profile_picture_url,
        userName: offer_owner.user_name,
        isOnline: offer_owner.is_online,
        lastOnline: offer_owner.last_online,
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
    <div className="flex gap-x-6">
      {/* bio */}
      <div className="hidden h-full w-[176px] min-w-[176px] flex-col 700:flex 1200:hidden 1400:flex">
        <span className="text-lg text-lmGrey600 dark:text-dmGrey100">
          Short Bio
        </span>
        <div
          className={`flex h-full w-full flex-col gap-y-1 rounded-3xl bg-white p-6 shadow dark:bg-dmGrey900 dark:shadow-dmShadow`}
        >
          <span className="w-full text-sm text-lmGrey600 line-clamp-[9] dark:text-dmGrey300">
            {offer_owner.bio}
          </span>
        </div>
      </div>
      {/* owner */}
      <div className="flex w-full flex-col">
        <span className="text-lg text-lmGrey600 dark:text-dmGrey100">
          Owner
        </span>
        <div
          className={`rounded-3xl bg-white p-6 shadow dark:bg-dmGrey900 dark:shadow-dmShadow`}
        >
          <UserProfileBig
            userProfileData={{
              userId: offer_owner.owner_id,
              profilePictureUrl: offer_owner.profile_picture_url,
              userName: offer_owner.user_name,
              firstName: offer_owner.first_name,
              lastName: offer_owner.last_name,
              isOnline: offer_owner.is_online,
              lastOnline: offer_owner.last_online,
              createdAt: offer_owner.user_created_at,
            }}
            showButton={offer_owner.owner_id !== userId}
            onCallback={handleContactClick}
          />
        </div>
      </div>
    </div>
  );
};

export default OfferDetailsOwner;
