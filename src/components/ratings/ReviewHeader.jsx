import React, { useState } from "react";
import { calcPercentage } from "../../helpers/calcPercentage";
import ReviewBar from "./ReviewBar";

const ReviewHeader = ({ summary }) => {
  const {
    total_reviews,
    five_stars,
    four_stars,
    three_stars,
    two_stars,
    one_stars,
  } = summary;

  const [overallRating] = useState(
    ((five_stars * 5 + four_stars * 4 + three_stars * 3 + two_stars * 2 + one_stars) / total_reviews).toFixed(1)
  );
  const [ratings] = useState({
    fiveStars: {
      color: "bg-lime-400",
      value: calcPercentage(five_stars, total_reviews),
    },
    fourStars: {
      color: "bg-lime-500",
      value: calcPercentage(four_stars, total_reviews),
    },
    threeStars: {
      color: "bg-yellow-300",
      value: calcPercentage(three_stars, total_reviews),
    },
    twoStars: {
      color: "bg-orange-400",
      value: calcPercentage(two_stars, total_reviews),
    },
    oneStar: {
      color: "bg-red-500",
      value: calcPercentage(one_stars, total_reviews),
    },
  });

  return (
    <div className="flex w-full flex-col 600:flex-row">
      <div className="flex w-full flex-col items-center justify-center 600:h-[92px] 600:w-fit 600:min-w-fit 600:px-6">
        <span className="text-2xl text-lmGrey600 dark:text-dmGrey100">
          {overallRating}
        </span>
        <span className="text-xs text-lmGrey300 dark:text-dmGrey300">
          {total_reviews} Reviews
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
