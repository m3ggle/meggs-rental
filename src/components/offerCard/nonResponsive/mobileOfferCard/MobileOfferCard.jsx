import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMapSubContext } from "../../../../context/map/mapSub/mapSubContext";
import { useHandleLocationNavigation } from "../../../../hooks/catalog/useHandleLocationNavigation";
import { useHandleFly } from "../../../../hooks/useHandleFly";
import MobileCatalogOfferCardIcons from "./MobileOfferCardIcons";
import MobileCatalogOfferCardImgPart from "./MobileOfferCardImgPart";
import MobileCatalogOfferCardInfoPart from "./MobileOfferCardInfoPart";

const MobileOfferCard = ({ offerInformation, index, closeModal }) => {
  const { offerId, photoUrl, liked, location } = offerInformation;
  const { dispatchMapSub } = useMapSubContext();

  const navigate = useNavigate();
  const handleNavigation = () => {
    closeModal && closeModal();
    navigate(`/offer-details/${offerId}`);
  };

  const { handleFly } = useHandleFly();

  const locationDom = useLocation();

  const { handleLocationNavigation } = useHandleLocationNavigation();

  const handleLocation = () => {
    closeModal && closeModal();
    if (locationDom.pathname !== "/explore/map") {
      handleLocationNavigation(offerId, location);
      return;
    }
    handleFly(location.lng, location.lat, 14);
    dispatchMapSub({
      type: "UPDATE_ACTIVE_MARKER",
      payload: offerId,
    });
  };

  const handleLike = () => {};

  const handleHover = (payload) =>
    dispatchMapSub({
      type: "UPDATE_HOVER_MARKER",
      payload,
    });

  return (
    <div
      onMouseEnter={() => handleHover(offerId)}
      onMouseLeave={() => handleHover(false)}
      className={`relative flex w-full min-w-[300px] cursor-pointer gap-x-3 rounded-lg bg-white shadow duration-300 hover:scale-102 hover:shadow-md dark:bg-dmGrey900 dark:shadow-dmShadow`}
    >
      <MobileCatalogOfferCardImgPart
        onNavigationCallback={handleNavigation}
        photoUrl={photoUrl}
      />
      <MobileCatalogOfferCardIcons
        liked={liked}
        onLikeCallback={handleLike}
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
