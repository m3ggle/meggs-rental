import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useNotifyModalContext } from "../../../../context/notifyModal/notifyModalContext";
import { useUserContext } from "../../../../context/user/userContext";
import { useHandleLocationNavigation } from "../../../../hooks/catalog/useHandleLocationNavigation";
import { useHandleOfferLikeIcon } from "../../hooks/useHandleOfferLikeIcon";
import OfferCardIcons from "./OfferCardIcons";
import OfferCardImagePart from "./OfferCardImagePart";
import OfferCardInfoPart from "./OfferCardInfoPart";

const OfferCard = ({ offerInformation, index }) => {
  let { id, picture_urls, latitude, longitude, is_liked } = offerInformation;

  const navigate = useNavigate();
  const handleNavigation = () => navigate(`/offer-details/${id}`);

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

  const { handleLocationNavigation } = useHandleLocationNavigation();
  const handleLocation = () =>
    handleLocationNavigation(id, { lat: latitude, lng: longitude });

  return (
    <motion.div
      initial={{ opacity: 0, translateY: -24 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        opacity: { delay: index * 0.2 },
        translateY: { delay: index * 0.2 },
        scale: { ease: "easeInOut" },
      }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`relative flex w-full min-w-[312px] cursor-pointer gap-x-3 rounded-lg bg-white shadow dark:border dark:border-solid dark:border-dmGrey800/50 dark:bg-dmGrey900 dark:shadow-sm 500:h-[252px] 500:w-[180px] 500:min-w-0 500:justify-center 500:gap-x-0 500:rounded-xl 500:shadow-none dark:500:border-none 1400:h-[406px] 1400:w-[292px]`}
    >
      <OfferCardImagePart
        photoURLs={picture_urls}
        onNavigationCallback={handleNavigation}
      />
      <OfferCardIcons
        isLiked={isLiked}
        onLikeCallback={handleLike}
        onLocationCallback={handleLocation}
      />
      <OfferCardInfoPart
        offerInformation={offerInformation}
        onNavigationCallback={handleNavigation}
        onLocationCallback={handleLocation}
      />
    </motion.div>
  );
};

export default OfferCard;
