import React from "react";
import { getUserFirestore } from "../../api/firebase/getUserFirestore";
import UserProfileSmall from "../userProfile/UserProfileSmall";

const ReviewList = ({ reviews }) => {
  return (
    <>
      {reviews.map((review) => (
        <div
          key={review.userId}
          className="flex w-full flex-col gap-y-2 rounded-xl bg-white p-6 shadow dark:bg-dmGrey900 dark:shadow-dmShadow"
        >
          <UserProfileSmall
            reviewiew={true}
            rating={review.rating}
            text={review.timestamp}
            displayName={review.displayName}
            profilePic={review.userProfilePicture}
          />
          <span className="text-xs text-lmGrey600 dark:text-dmGrey100">
            {review.reviewContent}
          </span>
        </div>
      ))}
    </>
  );
};

export default ReviewList;
