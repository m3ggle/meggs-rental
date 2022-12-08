import React from "react";
import { useNavigate } from "react-router-dom";
import { useHandleLocationNavigation } from "../../../../hooks/catalog/useHandleLocationNavigation";
import TabletOfferCardIcons from "./TabletOfferCardIcons";
import TabletOfferCardImagePart from "./TabletOfferCardImagePart";
import TabletOfferCardInfoPart from "./TabletOfferCardInfoPart";

const TabletOfferCard = ({ offerInformation }) => {
  const { offerId, liked, photoUrl, location } = offerInformation;

  const navigate = useNavigate();
  const handleNavigation = () => navigate(`/offer-details/${offerId}`);

  const { handleLocationNavigation } = useHandleLocationNavigation();
  const handleLocation = () => handleLocationNavigation(offerId, location);

  const handleLike = () => {};

  return (
    <div className="relative flex cursor-pointer bg-white dark:bg-dmGrey900 dark:shadow-sm h-[252px] w-[180px] justify-center gap-x-0 rounded-xl shadow-none">
      <TabletOfferCardImagePart
        photoUrl={photoUrl}
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
