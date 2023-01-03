import React from "react";
import ExampleData from "../../ExampleData";
import Btn from "../common/Btn";
import ReviewHeader from "./ReviewHeader";
import ReviewList from "./ReviewList";

const ReviewSection = ({reviews}) => {
  const { reviewId } = ExampleData();
  return (
    <div className="flex w-full flex-col gap-y-2 rounded-lg">
      <ReviewHeader
        totalAmount={reviewId.totalAmount}
        ratingDetailed={reviewId.ratingDetailed}
      />
      <ReviewList reviews={reviews} />
      <Btn type="button" uiType="secondary" title="Load More" />
    </div>
  );
};

export default ReviewSection;
