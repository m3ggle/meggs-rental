import React, { useEffect, useState } from 'react'

const example = {
    totalAmount: 32,
    ratingFive: 6,
    ratingFour: 16,
    ratingThree: 8,
    ratingTwo: 0,
    ratingOne: 2,
}

const ReviewHeader = () => {
    const [overallRating, setOverallRating] = useState()
    const [ratings, setRatings] = useState({
        fiveStars: {
            color: "bg-lime-400",
            value: "",
        },
        fourStars: {
            color: "bg-lime-500",
            value: "",
        },
        threeStars: {
            color: "bg-yellow-300",
            value: "",
        },
        twoStars: {
            color: "bg-orange-400",
            value: "",
        },
        oneStar: {
            color: "bg-red-500",
            value: "",
        }
    })
    const [fiveStars, setFiveStars] = useState()
    const [fourStars, setFourStars] = useState();
    const [threeStars, setThreeStars] = useState();
    const [twoStars, setTwoStars] = useState()
    const [oneStar, setOneStar] = useState();

    useEffect(() => {

    }, [])

    // const fiveStars = "w-[10%]"
    // const fourStars = "w-[60%]"
    // const threeStars = "w-[30%]"
    // const twoStars = "w-[0%]"
    // const oneStar = "w-[2%]"

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-col items-center justify-center">
        <span className="text-2xl text-lmGrey600 ">4.1.</span>
        <span className="text-xs text-lmGrey300 ">32 Reviews</span>
      </div>
      <div className="flex w-full flex-col justify-center gap-y-2 py-3">
        <div className="flex w-[204px] items-start overflow-hidden rounded-full p-[1px]">
          <div
            className={`h-[5px] ${fiveStars} rounded-full bg-lime-400`}
          ></div>
        </div>
        <div className="flex w-[204px] items-start overflow-hidden rounded-full p-[1px]">
          <div
            className={`h-[5px] ${fourStars} rounded-full bg-lime-500`}
          ></div>
        </div>
        <div className="flex w-[204px] items-start overflow-hidden rounded-full p-[1px]">
          <div
            className={`h-[5px] ${threeStars} rounded-full bg-yellow-300`}
          ></div>
        </div>
        <div className="flex w-[204px] items-start overflow-hidden rounded-full p-[1px]">
          <div
            className={`h-[5px] ${twoStars} rounded-full bg-orange-400`}
          ></div>
        </div>
        <div className="flex w-[204px] items-start overflow-hidden rounded-full p-[1px]">
          <div
            className={`h-[5px] ${oneStar} rounded-full bg-red-500`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ReviewHeader