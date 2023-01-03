import React from "react";
import Btn from "../common/Btn";
import ReviewHeader from "./ReviewHeader";
import ReviewList from "./ReviewList";

const ReviewSection = ({ reviewSection }) => {
  return (
    <>
      {reviewSection !== null && (
        <div className="flex w-full flex-col gap-2">
          <span className="text-base font-semibold text-lmGrey700 dark:text-dmGrey25">
            Ratings
          </span>
          <div className="flex w-full flex-col gap-y-2 rounded-lg">
            {reviewSection === null ? (
              <span>Currently no Reviews</span>
            ) : (
              <>
                <ReviewHeader
                  totalAmount={reviewSection.ratingStats.amount}
                  ratingDetailed={reviewSection.ratingStats.ratings}
                />
                <ReviewList reviews={reviewSection.reviews} />
                <Btn type="button" uiType="secondary" title="Load More" />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewSection;
