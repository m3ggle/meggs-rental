import React from "react";
import { useNavigate } from "react-router-dom";
import { useMapSubContext } from "../../../../context/map/mapSub/mapSubContext";
import { useHandleLocationNavigation } from "../../../../hooks/catalog/useHandleLocationNavigation";
import { useHandleOfferLikeIcon } from "../../hooks/useHandleOfferLikeIcon";
import MobileOfferCardIcons from "./MobileOfferCardIcons";
import MobileCatalogOfferCardImgPart from "./MobileOfferCardImgPart";
import MobileCatalogOfferCardInfoPart from "./MobileOfferCardInfoPart";

const MobileOfferCard = ({ offerInformation, index, closeModal }) => {
  const { id, picture_urls, latitude, longitude, is_liked } = offerInformation;
  const { dispatchMapSub } = useMapSubContext();

  const { isLiked, handleOfferLikeIcon } = useHandleOfferLikeIcon({
    offerId: id,
    is_liked,
  });

  const navigate = useNavigate();
  const handleNavigation = () => {
    closeModal && closeModal();
    navigate(`/offer-details/${id}`);
  };

  const { handleLocationNavigation } = useHandleLocationNavigation();
  const handleLocation = () =>
    handleLocationNavigation(id, { lat: latitude, lng: longitude });

  const handleHover = (payload) =>
    dispatchMapSub({
      type: "UPDATE_HOVER_MARKER",
      payload,
    });

  return (
    <div
      onMouseEnter={() => handleHover(id)}
      onMouseLeave={() => handleHover(false)}
      className={`relative flex w-full min-w-[300px] cursor-pointer gap-x-3 rounded-lg bg-white shadow duration-300 hover:scale-102 hover:shadow-md active:scale-99 active:shadow-sm dark:bg-dmGrey900 dark:shadow-dmShadow`}
    >
      <MobileCatalogOfferCardImgPart
        onNavigationCallback={handleNavigation}
        picture_urls={picture_urls}
      />
      <MobileOfferCardIcons
        liked={isLiked}
        onLikeCallback={handleOfferLikeIcon}
        onLocationCallback={handleLocation}
      />
      <MobileCatalogOfferCardInfoPart
        onNavigationCallback={handleNavigation}
        offerInformation={offerInformation}
      />
    </div>
  );
};

export default MobileOfferCard;
