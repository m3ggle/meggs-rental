// non responsive
// <LittleOfferCard name="Tesla Model 3" location="Salzburger Straße 18" price="100" transmission="Automatic" seats={5} />
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useHandleLocationNavigation } from "../../../../../../hooks/catalog/useHandleLocationNavigation";
import styles from "../../../../../../style";
import MobileCatalogOfferCardIcons from "./MobileCatalogOfferCardIcons";
import MobileCatalogOfferCardImgPart from "./MobileCatalogOfferCardImgPart";
import MobileCatalogOfferCardInfoPart from "./MobileCatalogOfferCardInfoPart";

const MobileCatalogOfferCard = ({ offerInformation, index, closeModal }) => {
  const { offerId, photoUrl, liked, location } = offerInformation;

  const navigate = useNavigate();
  const handleNavigation = () => {
    closeModal && closeModal();
    navigate(`/offer-details/${offerId}`);
  };

  const { handleLocationNavigation } = useHandleLocationNavigation();
  const handleLocation = () => {
    closeModal && closeModal();
    handleLocationNavigation(offerId, location);
  };
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
      className={`${styles.darkModeBorder} relative flex min-w-[300px] cursor-pointer gap-x-3 rounded-lg bg-white shadow-md duration-300 hover:scale-102 hover:shadow-lg dark:bg-dmGrey900`}
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
    </motion.div>
  );
};

export default MobileCatalogOfferCard;
