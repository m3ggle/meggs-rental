import React from "react";
import ExampleData from "../../ExampleData";
import ReviewHeader from "./ReviewHeader";
import ReviewList from "./ReviewList";

const ReviewSection = () => {
  const { reviewId } = ExampleData();
  return (
    <div className="flex w-full flex-col gap-y-2 rounded-lg">
      <ReviewHeader
        totalAmount={reviewId.totalAmount}
        ratingDetailed={reviewId.ratingDetailed}
      />
      <ReviewList reviews={reviewId.reviews} />
      <div className="flex w-full items-center justify-center rounded-lg bg-primary100 px-3 py-2 text-xs font-semibold text-lmPrimary duration-300 hover:scale-102 active:scale-98 ">
        Load More
      </div>
    </div>
  );
};

export default ReviewSection;

/* in App
<div className="flex w-[360px] 600:w-[489px] justify-center rounded-2xl py-6 px-4 shadow overflow-scroll h-[640px]">
        <ReviewSection />
      </div>
*/