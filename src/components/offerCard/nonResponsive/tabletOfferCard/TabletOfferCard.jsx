import React from "react";
import { useNavigate } from "react-router-dom";
import { useHandleLocationNavigation } from "../../../../hooks/catalog/useHandleLocationNavigation";
import { useHandleOfferLikeIcon } from "../../hooks/useHandleOfferLikeIcon";
import TabletOfferCardIcons from "./TabletOfferCardIcons";
import TabletOfferCardImagePart from "./TabletOfferCardImagePart";
import TabletOfferCardInfoPart from "./TabletOfferCardInfoPart";

const TabletOfferCard = ({ offerInformation }) => {
  const { id, picture_urls, latitude, longitude, is_liked } = offerInformation;

  const navigate = useNavigate();
  const handleNavigation = () => navigate(`/offer-details/${id}`);

    const { isLiked, handleOfferLikeIcon } = useHandleOfferLikeIcon({
      offerId: id,
      is_liked,
    });
  const { handleLocationNavigation } = useHandleLocationNavigation();
  const handleLocation = () =>
    handleLocationNavigation(id, { lat: latitude, lng: longitude });

  return (
    <div className="relative flex h-[252px] w-[180px] cursor-pointer justify-center gap-x-0 rounded-xl bg-white shadow-none duration-300 hover:scale-102 active:scale-99 dark:bg-dmGrey900 dark:shadow-sm">
      <TabletOfferCardImagePart
        picture_urls={picture_urls}
        onNavigationCallback={handleNavigation}
      />
      <TabletOfferCardIcons
        liked={isLiked}
        onLikeCallback={handleOfferLikeIcon}
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
