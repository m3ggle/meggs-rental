import React from "react";
import { useNavigate } from "react-router-dom";
import { useHandleLocationNavigation } from "../../../../hooks/catalog/useHandleLocationNavigation";
import DesktopOfferCardIcons from "./DesktopOfferCardIcons";
import DesktopOfferCardImagePart from "./DesktopOfferCardImagePart";
import DesktopOfferCardInfoPart from "./DesktopOfferCardInfoPart";

const DesktopOfferCard = ({ offerInformation }) => {
  const { offerId, liked, photoUrl, location } = offerInformation;

  const navigate = useNavigate();
  const handleNavigation = () => navigate(`/offer-details/${offerId}`);

  const { handleLocationNavigation } = useHandleLocationNavigation();
  const handleLocation = () => handleLocationNavigation(offerId, location);

  const handleLike = () => {};

  return (
    <div className="relative flex cursor-pointer bg-white dark:bg-dmGrey900 dark:shadow-sm justify-center gap-x-0 rounded-xl shadow-none dark:border-none h-[406px] w-[292px]">
      <DesktopOfferCardImagePart
        photoUrl={photoUrl}
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
