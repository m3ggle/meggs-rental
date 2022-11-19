import React, { useState } from "react";
import { calcPercentage } from "../../helper/calcPercentage";
import ReviewBar from "./ReviewBar";

const ReviewHeader = ({ totalAmount, ratingDetailed }) => {
  const { ratingFive, ratingFour, ratingThree, ratingTwo, ratingOne } =
    ratingDetailed;

  const [overallRating] = useState(
    (
      (ratingFive * 5 +
        ratingFour * 4 +
        ratingThree * 3 +
        ratingTwo * 2 +
        ratingOne) /
      totalAmount
    ).toFixed(1)
  );
  const [ratings] = useState({
    fiveStars: {
      color: "bg-lime-400",
      value: calcPercentage(ratingFive, totalAmount),
    },
    fourStars: {
      color: "bg-lime-500",
      value: calcPercentage(ratingFour, totalAmount),
    },
    threeStars: {
      color: "bg-yellow-300",
      value: calcPercentage(ratingThree, totalAmount),
    },
    twoStars: {
      color: "bg-orange-400",
      value: calcPercentage(ratingTwo, totalAmount),
    },
    oneStar: {
      color: "bg-red-500",
      value: calcPercentage(ratingOne, totalAmount),
    },
  });

  return (
    <div className="flex w-full flex-col 600:flex-row">
      <div className="flex w-full flex-col items-center justify-center 600:h-[92px] 600:w-fit 600:min-w-fit 600:px-6">
        <span className="text-2xl text-lmGrey600 dark:text-dmGrey100">
          {overallRating}
        </span>
        <span className="text-xs text-lmGrey300 dark:text-dmGrey300">
          {totalAmount} Reviews
        </span>
      </div>

      <div className="flex w-full flex-col justify-center gap-y-2 py-3 px-[2px]">
        <ReviewBar
          value={ratings.fiveStars.value}
          color={ratings.fiveStars.color}
        />
        <ReviewBar
          value={ratings.fourStars.value}
          color={ratings.fourStars.color}
        />
        <ReviewBar
          value={ratings.threeStars.value}
          color={ratings.threeStars.color}
        />
        <ReviewBar
          value={ratings.twoStars.value}
          color={ratings.twoStars.color}
        />
        <ReviewBar
          value={ratings.oneStar.value}
          color={ratings.oneStar.color}
        />
      </div>
    </div>
  );
};

export default ReviewHeader;
