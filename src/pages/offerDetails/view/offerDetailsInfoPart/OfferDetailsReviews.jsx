import React from "react";
import ReviewSection from "../../../../components/ratings/ReviewSection";

const OfferDetailsReviews = ({ reviewSection }) => {
  return (
    <div className="flex w-full flex-col">
      <span className="text-lg text-lmGrey600 dark:text-dmGrey100">
        Ratings
      </span>
      <div
        className={`flex w-full flex-col gap-y-1 rounded-3xl bg-white p-6 shadow dark:bg-dmGrey900 dark:shadow-dmShadow`}
      >
        <ReviewSection reviewSection={reviewSection} />
      </div>
    </div>
  );
};

export default OfferDetailsReviews;
