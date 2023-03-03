import React from "react";
import { copyUrlToClipboard } from "../../../helpers/copyUrlToClipboard";
import { getCurrentUrl } from "../../../helpers/getCurrentUrl";
import OfferDetailsHeaderPart from "./OfferDetailsHeaderPart";

const OfferDetailsHeader = ({ offerInformation }) => {
  const { offer_basics } = offerInformation;
  const { like_count, view_count } = offer_basics;

  const handleGoBack = () => window.history.back();
  const handleShare = () => {
    copyUrlToClipboard({
      url: getCurrentUrl(),
      successMessage: "Ready to share!",
    });
  };

  return (
    <div
      className={`flex h-full w-full items-center justify-between flex-row gap-y-1 rounded-3xl bg-white p-6 shadow dark:bg-dmGrey900 dark:shadow-dmShadow`}
    >
      {/* go back */}
      <OfferDetailsHeaderPart
        leftIcon="fa-solid fa-chevron-left"
        value="Go Back"
        onClickCallback={handleGoBack}
        cursor="cursor-pointer"
        additionalCSS="min-w-[84px]"
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
