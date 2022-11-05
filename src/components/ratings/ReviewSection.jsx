import React from "react";
import ExampleData from "../../ExampleData";
import ReviewHeader from "./ReviewHeader";
import ReviewList from "./ReviewList";

const ReviewSection = () => {
  const { reviewId } = ExampleData();

  return (
    <div className="flex w-full flex-col gap-y-2 p-3 rounded-lg overflow-scroll">
      <ReviewHeader totalAmount={reviewId.totalAmount} ratingDetailed={reviewId.ratingDetailed} />
      <ReviewList reviews={reviewId.reviews} />
      <button className="px-3 py-2 w-full text-xs font-semibold bg-primary100 text-lmPrimary rounded-lg ">Load More</button>
    </div>
  );
};

// difference between "Load More" (when user is in the open modal) and "Open Owners Profile" (eg. in the offer)

export default ReviewSection;
