import React from "react";
import Loading from "../Loading";
import ReviewHeader from "./ReviewHeader";
import ReviewList from "./ReviewList";

const ReviewSection = ({ reviewSection }) => {
  const { summary, reviews, summaryLoading, reviewsLoading } = reviewSection;

  return (
    <>
      {reviewSection !== null && (
        <div className="flex w-full flex-col gap-2">
          {/* <span className="text-base font-semibold text-lmGrey700 dark:text-dmGrey25">
            Ratings
          </span> */}
          {reviewsLoading || summaryLoading ? (
            <div className="h-[100px]">
              <Loading />
            </div>
          ) : reviews === null ? (
            <div className="w-full h-10 flex justify-center items-center text-lmGrey600 dark:text-dmGrey300 text-base">currently no reviews</div>
          ) : (
            <div className="flex w-full flex-col gap-y-2 rounded-lg">
              {reviews.length === 0 ? (
                <span>Currently no Reviews</span>
              ) : (
                <>
                  <ReviewHeader summary={summary} />
                  <ReviewList reviews={reviews} />
                  {/* <Btn type="button" uiType="secondary" title="Load More" /> */}
                </>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ReviewSection;
