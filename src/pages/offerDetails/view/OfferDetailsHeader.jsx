import React, { useEffect } from "react";
import { useHandleOfferLikeIcon } from "../../../components/offerCard/hooks/useHandleOfferLikeIcon";
import { useUserContext } from "../../../context/user/userContext";
import { copyUrlToClipboard } from "../../../helpers/copyUrlToClipboard";
import { getCurrentUrl } from "../../../helpers/getCurrentUrl";
import styles from "../../../style";
import { handleLikeSetQuery } from "../helpers/handleLikeSetQuery";
import OfferDetailsHeaderPart from "./OfferDetailsHeaderPart";

const OfferDetailsHeader = ({ offerInformation }) => {
  const { userId } = useUserContext();
  const { offer_basics } = offerInformation;
  const { is_liked, like_count, view_count } = offer_basics;

  const { isLiked, handleOfferLikeIcon } = useHandleOfferLikeIcon({
    offerId: offer_basics.id,
    is_liked,
  });

  const handleGoBack = () => window.history.back();
  const handleShare = () => {
    copyUrlToClipboard({
      url: getCurrentUrl(),
      successMessage: "Ready to share!",
    });
  };

  // debounce
  const handleLike = async () => {
    await handleOfferLikeIcon();
  };

  useEffect(() => {
    handleLikeSetQuery({
      offerId: offer_basics.id,
      userId,
      isLiked,
    });
  }, [isLiked]);

  return (
    <div
      className={`flex h-full w-full items-center justify-between gap-y-1 rounded-3xl bg-white p-6 shadow dark:bg-dmGrey900 dark:shadow-dmShadow`}
    >
      {/* go back */}
      <OfferDetailsHeaderPart
        leftIcon="fa-solid fa-chevron-left"
        value="Go Back"
        onClickCallback={handleGoBack}
      />
      {/* views, likes and share */}
      <div className="flex items-center gap-x-8">
        {/* views */}
        <OfferDetailsHeaderPart
          rightIcon="fa-solid fa-eye"
          value={view_count}
        />

        {/* likes */}
        <div
          onClick={handleLike}
          className={`flex items-center gap-x-2 py-2 ${
            isLiked
              ? styles.badgeRedTextGradient
              : "text-lmGrey600 hover:text-lmGrey800 dark:text-dmGrey100 dark:hover:text-lmGrey25"
          } `}
        >
          <span className="text-base">{like_count}</span>
          <div className="flex h-[15px] w-[15px] items-center justify-center">
            <i className="fa-solid fa-heart text-[15px]" />
          </div>
        </div>

        {/* share */}
        <OfferDetailsHeaderPart
          rightIcon="fa-solid fa-share"
          value="Share"
          onClickCallback={handleShare}
        />
      </div>
    </div>
  );
};

export default OfferDetailsHeader;
