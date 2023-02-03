import { formatRelative } from "date-fns";
import React from "react";
import UserProfileSmall from "../userProfile/UserProfileSmall";

const ReviewList = ({ reviews }) => {
  return (
    <>
      {reviews.map((review, index) => (
        <div
          key={index}
          className="flex w-full flex-col gap-y-2 rounded-xl bg-white p-6 shadow dark:bg-dmGrey900 dark:shadow-dmShadow"
        >
          <UserProfileSmall
            review={true}
            displayName={`@${review.user_name}`}
            rating={review.rating}
            text={`${review.first_name} ${review.last_name} - ${formatRelative(
              new Date(review.review_created_at),
              new Date()
            )}`}
            uid={review.user_id}
            photoUrl={review.profile_picture_url}
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
