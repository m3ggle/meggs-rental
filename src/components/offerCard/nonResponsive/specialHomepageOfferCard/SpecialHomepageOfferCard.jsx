import React from "react";
import { useNavigate } from "react-router-dom";
import { useHandleLocationNavigation } from "../../../../hooks/catalog/useHandleLocationNavigation";
import { useHandleOfferLikeIcon } from "../../hooks/useHandleOfferLikeIcon";
import SpecialHomepageOfferCardIcons from "./SpecialHomepageOfferCardIcons";
import SpecialHomepageOfferCardImagePart from "./SpecialHomepageOfferCardImagePart";
import SpecialHomepageOfferCardInfoPart from "./SpecialHomepageOfferCardInfoPart";

const SpecialHomepageOfferCard = ({ offerInformation }) => {
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
    <div className="relative flex h-[406px] w-[292px] cursor-pointer justify-center gap-x-0 rounded-xl bg-white shadow-md duration-300 hover:scale-101 hover:shadow-lg active:scale-99 active:shadow-sm dark:border-none dark:bg-dmGrey900 dark:shadow-sm">
      <SpecialHomepageOfferCardImagePart
        photoURL={picture_urls}
        onNavigationCallback={handleNavigation}
      />
      <SpecialHomepageOfferCardIcons
        liked={isLiked}
        onLikeCallback={handleOfferLikeIcon}
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
