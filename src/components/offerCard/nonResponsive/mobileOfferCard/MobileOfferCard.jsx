import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMapSubContext } from "../../../../context/map/mapSub/mapSubContext";
import { useNotifyModalContext } from "../../../../context/notifyModal/notifyModalContext";
import { useUserContext } from "../../../../context/user/userContext";
import { useHandleLocationNavigation } from "../../../../hooks/catalog/useHandleLocationNavigation";
import { useHandleFly } from "../../../../hooks/useHandleFly";
import MobileCatalogOfferCardImgPart from "./MobileOfferCardImgPart";
import MobileCatalogOfferCardInfoPart from "./MobileOfferCardInfoPart";

// id, street, house_number, city, province country, like_count, offer_name, day_price, week_price, month_price, transmission, amount_seats, latitude, longitude, picture_urls

const MobileOfferCard = ({ offerInformation, index, closeModal }) => {
  // console.log(offerInformation);
  const { id, picture_urls } = offerInformation;
  const { dispatchMapSub } = useMapSubContext();
  // const { signedIn, verified } = useUserContext();
  // const { openAuthNotifyModal } = useNotifyModalContext();

  const navigate = useNavigate();
  const handleNavigation = () => {
    closeModal && closeModal();
    navigate(`/offer-details/${id}`);
  };

  // const { handleFly } = useHandleFly();

  // const locationDom = useLocation();

  // const { handleLocationNavigation } = useHandleLocationNavigation();

  // const handleLocation = () => {
  //   closeModal && closeModal();
  //   if (locationDom.pathname !== "/explore/map") {
  //     handleLocationNavigation(id, { lat: latitude, lng: longitude });
  //     return;
  //   }
  //   handleFly(longitude, latitude, 14);
  //   dispatchMapSub({
  //     type: "UPDATE_ACTIVE_MARKER",
  //     payload: id,
  //   });
  // };

  // const handleLike = () => {
  //   if (!signedIn || !verified) {
  //     openAuthNotifyModal();
  //     return;
  //   }
  // };

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
      <MobileCatalogOfferCardInfoPart
        onNavigationCallback={handleNavigation}
        offerInformation={offerInformation}
      />
    </div>
  );
};

export default MobileOfferCard;
