import React, { useEffect } from "react";
import { useHandleOfferLikeIcon } from "../../../../components/offerCard/hooks/useHandleOfferLikeIcon";
import { useNotifyModalContext } from "../../../../context/notifyModal/notifyModalContext";
import { useUserContext } from "../../../../context/user/userContext";
import { useHandleLocationNavigation } from "../../../../hooks/catalog/useHandleLocationNavigation";
import styles from "../../../../style";
import { handleLikeSetQuery } from "../../helpers/handleLikeSetQuery";

const OfferDetailsBasicInfo = ({ offerInformation }) => {
  const { offer_basics, offer_location, offer_prices } = offerInformation;
  const { id, offer_name, offer_description, is_liked } = offer_basics;
  const { formatted, latitude, longitude } = offer_location;
  const { day_price, week_price, month_price } = offer_prices;

  const { userId } = useUserContext();
  const { openAuthNotifyModal } = useNotifyModalContext();

  const { handleLocationNavigation } = useHandleLocationNavigation();
  const handleLocation = () =>
    handleLocationNavigation(id, { lat: latitude, lng: longitude });

  const { isLiked, handleOfferLikeIcon } = useHandleOfferLikeIcon({
    offerId: offer_basics.id,
    is_liked,
  });

    const handleLike = () => {
      if (userId === null) {
        openAuthNotifyModal();
        return;
      }

      handleOfferLikeIcon();
    };

  useEffect(() => {
    handleLikeSetQuery({
      offerId: offer_basics.id,
      userId,
      isLiked,
    });
  }, [isLiked]);

  return (
    <div className="flex gap-x-6">
      {/* basic info */}
      <div className="flex w-full flex-col">
        <span className="text-lg text-lmGrey600 dark:text-dmGrey100">
          Basic Information
        </span>
        <div
          className={`flex h-full w-full flex-col gap-y-1 rounded-3xl bg-white p-6 shadow dark:bg-dmGrey900 dark:shadow-dmShadow`}
        >
          <div className="flex items-center text-lmGrey600 dark:text-dmGrey100">
            <div
              className="fa-solid fa-location-dot mb-[3px] h-[16px] w-[16px] text-[16px]"
              aria-hidden="true"
            />
            <span onClick={handleLocation} className="cursor-pointer text-base">
              {formatted}
            </span>
          </div>
          <div className="flex h-fit w-full items-center justify-between">
            <span className="text-2xl font-semibold text-lmGrey800 dark:text-dmGrey25">
              {offer_name}
            </span>
            <div
              onClick={handleLike}
              className="flex h-8 w-8 cursor-pointer items-center justify-center pb-[2px]"
            >
              <i
                className={`fa-solid fa-heart text-[30px] ${
                  isLiked
                    ? styles.badgeRedTextGradient
                    : "text-lmGrey600 hover:text-lmGrey800 dark:text-dmGrey100 dark:hover:text-lmGrey25"
                }`}
              />
            </div>
          </div>
          <div className="flex w-full flex-wrap items-center gap-x-[2px] 700:hidden 1200:flex 1400:hidden">
            <span className="text-lg text-lmPrimary dark:text-dmPrimary">
              {day_price}{" "}
              <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
                /day
              </span>
            </span>
            <div className="flex items-center justify-center px-1">
              <div className="h-1 w-1 rounded-full bg-lmGrey400"></div>
            </div>
            <span className="text-lg text-lmPrimary dark:text-dmPrimary">
              {week_price}{" "}
              <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
                /week
              </span>
            </span>
            <div className="flex items-center justify-center px-1">
              <div className="h-1 w-1 rounded-full bg-lmGrey400"></div>
            </div>
            <span className="text-lg text-lmPrimary dark:text-dmPrimary">
              {month_price}{" "}
              <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
                /month
              </span>
            </span>
          </div>
          {/* description */}
          <div className="hidden h-[60px] w-full 700:flex 1200:hidden 1400:flex">
            <span className="w-full text-sm text-lmGrey600 line-clamp-3 dark:text-dmGrey300">
              {offer_description}
            </span>
          </div>
        </div>
      </div>
      {/* prices */}
      <div className="hidden h-full w-[176px] min-w-[176px] flex-col 700:flex 1200:hidden 1400:flex">
        <span className="text-lg text-lmGrey600 dark:text-dmGrey100">
          Prices
        </span>
        <div
          className={`flex h-full w-full flex-col gap-y-1 rounded-3xl bg-white p-6 shadow dark:bg-dmGrey900 dark:shadow-dmShadow`}
        >
          <span className="text-lg text-lmPrimary dark:text-dmPrimary">
            {day_price}{" "}
            <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
              /day
            </span>
          </span>
          <span className="text-lg text-lmPrimary dark:text-dmPrimary">
            {week_price}{" "}
            <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
              /week
            </span>
          </span>
          <span className="text-lg text-lmPrimary dark:text-dmPrimary">
            {month_price}{" "}
            <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
              /month
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OfferDetailsBasicInfo;
