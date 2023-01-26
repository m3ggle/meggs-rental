import React, { useState } from "react";
import { calcPercentage } from "../../helpers/calcPercentage";
import ReviewBar from "./ReviewBar";

const ReviewHeader = ({ totalAmount, ratingDetailed }) => {
  const { five, four, three, two, one } = ratingDetailed;

  const [overallRating] = useState(
    ((five * 5 + four * 4 + three * 3 + two * 2 + one) / totalAmount).toFixed(1)
  );
  const [ratings] = useState({
    fiveStars: {
      color: "bg-lime-400",
      value: calcPercentage(five, totalAmount),
    },
    fourStars: {
      color: "bg-lime-500",
      value: calcPercentage(four, totalAmount),
    },
    threeStars: {
      color: "bg-yellow-300",
      value: calcPercentage(three, totalAmount),
    },
    twoStars: {
      color: "bg-orange-400",
      value: calcPercentage(two, totalAmount),
    },
    oneStar: {
      color: "bg-red-500",
      value: calcPercentage(one, totalAmount),
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
