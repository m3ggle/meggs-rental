import React from "react";
import { useUrlManipulation } from "../../../hooks/urlManipulation/useUrlManipulation";

const ReviewsUser = () => {
  const { getSingleParam } = useUrlManipulation();
  const user = getSingleParam("id");

  return (
    <div className="flex h-screen w-full items-center justify-center text-lmGrey900 dark:text-dmGrey100 bg-white dark:bg-dmGrey900">
      Reviews regarding an User is in development
    </div>
  );
};

export default ReviewsUser;
