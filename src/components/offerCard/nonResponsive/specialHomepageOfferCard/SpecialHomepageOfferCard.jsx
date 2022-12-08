import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useHandleLocationNavigation } from '../../../../hooks/catalog/useHandleLocationNavigation';
import SpecialHomepageOfferCardIcons from './SpecialHomepageOfferCardIcons';
import SpecialHomepageOfferCardImagePart from './SpecialHomepageOfferCardImagePart';
import SpecialHomepageOfferCardInfoPart from './SpecialHomepageOfferCardInfoPart';

const SpecialHomepageOfferCard = ({ offerInformation }) => {
  const { offerId, liked, photoUrl, location } = offerInformation;

  const navigate = useNavigate();
  const handleNavigation = () => navigate(`/offer-details/${offerId}`);

  const { handleLocationNavigation } = useHandleLocationNavigation();
  const handleLocation = () => handleLocationNavigation(offerId, location);

  const handleLike = () => {};

  return (
    <div className="relative flex h-[406px] w-[292px] cursor-pointer justify-center gap-x-0 rounded-xl bg-white shadow-none dark:border-none dark:bg-dmGrey900 dark:shadow-sm">
      <SpecialHomepageOfferCardImagePart
        photoUrl={photoUrl}
        onNavigationCallback={handleNavigation}
      />
      <SpecialHomepageOfferCardIcons
        liked={liked}
        onLikeCallback={handleLike}
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

export default SpecialHomepageOfferCard