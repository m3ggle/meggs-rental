// <OfferCard name="Tesla Model 3" location="Salzburger Straße 18" price="100" transmission="Automatic" seats={5} />
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useHandleLocationNavigation } from "../../../pages/explore/catalog/hooks/useHandleLocationNavigation";
import OfferCardIcons from "./OfferCardIcons";
import OfferCardImagePart from "./OfferCardImagePart";
import OfferCardInfoPart from "./OfferCardInfoPart";

const OfferCard = ({ offerInformation, index }) => {
  const { offerId, liked, photoUrl, location } = offerInformation;

  const navigate = useNavigate();
  const handleNavigation = () => navigate(`/offer-details/${offerId}`);

  const { handleLocationNavigation } = useHandleLocationNavigation();
  const handleLocation = () => handleLocationNavigation(offerId, location);

  const handleLike = () => {};

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
      // className="relative flex w-full min-w-[312px] cursor-pointer gap-x-3 rounded-lg bg-white shadow-md dark:bg-dmGrey900 500:h-[252px] 500:w-[180px] 500:min-w-0 500:justify-center 500:gap-x-0 500:rounded-xl 500:shadow-none 1400:h-[406px] 1400:w-[292px]"
      className="relative flex w-full min-w-[312px] cursor-pointer gap-x-3 rounded-lg bg-white shadow-md dark:500:border-none dark:border dark:border-solid dark:border-dmGrey800/50 dark:bg-dmGrey900 dark:shadow-sm 500:h-[252px] 500:w-[180px] 500:min-w-0 500:justify-center 500:gap-x-0 500:rounded-xl 500:shadow-none 1400:h-[406px] 1400:w-[292px]"
    >
      <OfferCardImagePart
        photoUrl={photoUrl}
        onNavigationCallback={handleNavigation}
      />
      <OfferCardIcons
        liked={liked}
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
