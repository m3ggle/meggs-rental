import React from "react";
import { useNavigate } from "react-router-dom";
import { useNotifyModalContext } from "../../../../context/notifyModal/notifyModalContext";
import { useUserContext } from "../../../../context/user/userContext";
import { useHandleLocationNavigation } from "../../../../hooks/catalog/useHandleLocationNavigation";
import TabletOfferCardIcons from "./TabletOfferCardIcons";
import TabletOfferCardImagePart from "./TabletOfferCardImagePart";
import TabletOfferCardInfoPart from "./TabletOfferCardInfoPart";

const TabletOfferCard = ({ offerInformation }) => {
  const { offerId, liked, photoURL, location } = offerInformation;
  const { signedIn, verified } = useUserContext();
  const { openAuthNotifyModal } = useNotifyModalContext();

  const navigate = useNavigate();
  const handleNavigation = () => navigate(`/offer-details/${offerId}`);

  const { handleLocationNavigation } = useHandleLocationNavigation();
  const handleLocation = () => handleLocationNavigation(offerId, location);

  const handleLike = () => {
    if (!signedIn || !verified) {
      openAuthNotifyModal();
      return;
    }
  };

  return (
    <div className="relative flex h-[252px] w-[180px] cursor-pointer justify-center gap-x-0 rounded-xl bg-white shadow-none duration-300 hover:scale-102 active:scale-99 dark:bg-dmGrey900 dark:shadow-sm">
      <TabletOfferCardImagePart
        photoURL={photoURL}
        onNavigationCallback={handleNavigation}
      />
      <TabletOfferCardIcons
        liked={liked}
        onLikeCallback={handleLike}
        onLocationCallback={handleLocation}
      />
      <TabletOfferCardInfoPart
        offerInformation={offerInformation}
        onNavigationCallback={handleNavigation}
        onLocationCallback={handleLocation}
      />
    </div>
  );
};

export default TabletOfferCard;
