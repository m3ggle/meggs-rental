import React from "react";
import { useNavigate } from "react-router-dom";
import { useNotifyModalContext } from "../../../../context/notifyModal/notifyModalContext";
import { useUserContext } from "../../../../context/user/userContext";
import { useHandleLocationNavigation } from "../../../../hooks/catalog/useHandleLocationNavigation";
import SpecialHomepageOfferCardIcons from "./SpecialHomepageOfferCardIcons";
import SpecialHomepageOfferCardImagePart from "./SpecialHomepageOfferCardImagePart";
import SpecialHomepageOfferCardInfoPart from "./SpecialHomepageOfferCardInfoPart";

const SpecialHomepageOfferCard = ({ offerInformation }) => {
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
    <div className="relative flex h-[406px] w-[292px] cursor-pointer justify-center gap-x-0 rounded-xl bg-white shadow-md duration-300 hover:scale-101 hover:shadow-lg active:scale-99 active:shadow-sm dark:border-none dark:bg-dmGrey900 dark:shadow-sm">
      <SpecialHomepageOfferCardImagePart
        photoURL={photoURL}
        onNavigationCallback={handleNavigation}
      />
      <SpecialHomepageOfferCardIcons
        liked={liked}
        onLikeCallback={handleLike}
        onLocationCallback={handleLocation}
      />
      <SpecialHomepageOfferCardInfoPart
        offerInformation={offerInformation}
        onNavigationCallback={handleNavigation}
        onLocationCallback={handleLocation}
      />
    </div>
  );
};

export default SpecialHomepageOfferCard;
