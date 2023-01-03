import React from "react";
import { useEffect } from "react";
import { getUserFirestore } from "../../api/firebase/getUserFirestore";
import UserProfileSmall from "../userProfile/UserProfileSmall";

const ReviewList = ({ reviews }) => {
  return (
    <>
      {reviews.map((review, index) => (
        <div
          key={review.userId + index}
          className="flex w-full flex-col gap-y-2 rounded-xl bg-white p-6 shadow dark:bg-dmGrey900 dark:shadow-dmShadow"
        >
          <UserProfileSmall
            review={true}
            rating={review.rating}
            text={review.timestamp}
            uid={review.userId}
            fetchUser={true}
          />
          <span className="text-sm text-lmGrey600 dark:text-dmGrey100">
            {review.comment}
          </span>
        </div>
      ))}
    </>
  );
};

export default ReviewList;
