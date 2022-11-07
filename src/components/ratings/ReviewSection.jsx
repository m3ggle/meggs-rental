import { useAutoAnimate } from "@formkit/auto-animate/react";
import React, { useState } from "react";
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
      <div className="w-full rounded-lg bg-primary100 px-3 py-2 text-xs font-semibold text-lmPrimary duration-300 flex justify-center items-center hover:scale-102 active:scale-98 ">
        Load More
      </div>
    </div>
  );
};

export default ReviewSection;
