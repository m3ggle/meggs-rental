import React from "react";
import UserProfileSmall from "../userProfile/UserProfileSmall";

const ReviewList = ({ reviews }) => {
  return (
    <>
      {reviews.map((rev) => (
        <div
          key={rev.userId}
          className="flex w-full flex-col gap-y-2 rounded-xl bg-white p-6 shadow dark:bg-dmGrey900 dark:shadow-dmShadow"
        >
          <UserProfileSmall
            review={true}
            rating={rev.rating}
            text={rev.timestamp}
            displayName={rev.displayName}
            profilePic={rev.userProfilePicture}
          />
          <span className="text-xs text-lmGrey600 dark:text-dmGrey100">
            {rev.reviewContent}
          </span>
        </div>
      ))}
    </>
  );
};

export default ReviewList;
