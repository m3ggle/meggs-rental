import React, { useEffect } from "react";
import { useHandleOfferLikeIcon } from "../../../components/offerCard/hooks/useHandleOfferLikeIcon";
import { useUserContext } from "../../../context/user/userContext";
import { copyUrlToClipboard } from "../../../helpers/copyUrlToClipboard";
import { getCurrentUrl } from "../../../helpers/getCurrentUrl";
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

  return (
    <div
      className={`flex h-full w-full items-center justify-between gap-y-1 rounded-3xl bg-white p-6 shadow dark:bg-dmGrey900 dark:shadow-dmShadow`}
    >
      {/* go back */}
      <OfferDetailsHeaderPart
        leftIcon="fa-solid fa-chevron-left"
        value="Go Back"
        onClickCallback={handleGoBack}
        cursor="cursor-pointer"
      />
      {/* views, likes and share */}
      <div className="flex items-center gap-x-8">
        {/* views */}
        <OfferDetailsHeaderPart
          rightIcon="fa-solid fa-eye"
          value={view_count}
          hoverEnabled={false}
        />

        {/* likes */}
        <OfferDetailsHeaderPart
          rightIcon="fa-solid fa-heart"
          value={like_count}
          hoverEnabled={false}
        />

        {/* share */}
        <OfferDetailsHeaderPart
          rightIcon="fa-solid fa-share"
          value="Share"
          onClickCallback={handleShare}
          cursor="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default OfferDetailsHeader;
