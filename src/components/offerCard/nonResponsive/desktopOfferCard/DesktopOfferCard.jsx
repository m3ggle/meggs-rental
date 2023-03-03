import React from "react";
import { useNavigate } from "react-router-dom";
import { useNotifyModalContext } from "../../../../context/notifyModal/notifyModalContext";
import { useUserContext } from "../../../../context/user/userContext";
import { useHandleLocationNavigation } from "../../../../hooks/catalog/useHandleLocationNavigation";
import { useHandleOfferLikeIcon } from "../../hooks/useHandleOfferLikeIcon";
import DesktopOfferCardIcons from "./DesktopOfferCardIcons";
import DesktopOfferCardImagePart from "./DesktopOfferCardImagePart";
import DesktopOfferCardInfoPart from "./DesktopOfferCardInfoPart";

const DesktopOfferCard = ({ offerInformation }) => {
  const { id, picture_urls, latitude, longitude, is_liked } = offerInformation;

  const navigate = useNavigate();
  const handleNavigation = () => navigate(`/offer-details/${id}`);

  const { handleLocationNavigation } = useHandleLocationNavigation();
  const handleLocation = () =>
    handleLocationNavigation(id, { lat: latitude, lng: longitude });

  const { userId } = useUserContext();
  const { openAuthNotifyModal } = useNotifyModalContext();

  const { isLiked, handleOfferLikeIcon } = useHandleOfferLikeIcon({
    offerId: id,
    is_liked,
  });

  const handleLike = () => {
    if (userId === null) {
      openAuthNotifyModal();
      return;
    }

    handleOfferLikeIcon();
  };

  return (
    <div className="relative flex h-[406px] w-[292px] cursor-pointer justify-center gap-x-0 rounded-xl bg-white shadow-none duration-300 hover:scale-101 active:scale-99 dark:border-none dark:bg-dmGrey900 dark:shadow-sm">
      <DesktopOfferCardImagePart
        photoURL={picture_urls}
        onNavigationCallback={handleNavigation}
      />
      <DesktopOfferCardIcons
        liked={isLiked}
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
