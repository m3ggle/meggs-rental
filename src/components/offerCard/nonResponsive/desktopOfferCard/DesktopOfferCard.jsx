import React from "react";
import { useNavigate } from "react-router-dom";
import { useNotifyModalContext } from "../../../../context/notifyModal/notifyModalContext";
import { useUserContext } from "../../../../context/user/userContext";
import { useHandleLocationNavigation } from "../../../../hooks/catalog/useHandleLocationNavigation";
import DesktopOfferCardIcons from "./DesktopOfferCardIcons";
import DesktopOfferCardImagePart from "./DesktopOfferCardImagePart";
import DesktopOfferCardInfoPart from "./DesktopOfferCardInfoPart";

const DesktopOfferCard = ({ offerInformation }) => {
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
    <div className="relative flex h-[406px] w-[292px] cursor-pointer justify-center gap-x-0 rounded-xl bg-white shadow-none duration-300 hover:scale-101 active:scale-99 dark:border-none dark:bg-dmGrey900 dark:shadow-sm">
      <DesktopOfferCardImagePart
        photoURL={photoURL}
        onNavigationCallback={handleNavigation}
      />
      <DesktopOfferCardIcons
        liked={liked}
        onLikeCallback={handleLike}
        onLocationCallback={handleLocation}
      />
      <DesktopOfferCardInfoPart
        offerInformation={offerInformation}
        onNavigationCallback={handleNavigation}
        onLocationCallback={handleLocation}
      />
    </div>
  );
};

export default DesktopOfferCard;
