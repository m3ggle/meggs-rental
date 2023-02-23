import React from "react";
import LazyImage from "../../../components/LazyImage";
import { useWindowSize } from "../../../hooks/useWindowSize";

const HomepageComment = ({ photoURL, comment, association, commentWidth }) => {
  commentWidth = commentWidth ?? "fit-content";

  const windowWidth = useWindowSize().width;

  return (
    <div className="flex min-w-fit gap-3">

      <LazyImage
        src={photoURL}
        alt="comment"
        width={windowWidth > 700 ? "88px" : "60px"}
        height={windowWidth > 700 ? "88px" : "60px"}
        className="h-[60px] w-[60px] rounded-full bg-lmGrey200 object-cover object-center shadow 700:h-[88px] 700:w-[88px]"
      />
      <div
        style={{ width: commentWidth }}
        className="flex items-center rounded-2xl bg-white p-4 shadow dark:bg-dmGrey900 dark:shadow-dmShadow"
      >
        <span className="text-base text-lmGrey600 dark:text-dmGrey100">
          {comment}{" "}
          <span className="text-lmGrey400 dark:text-dmGrey300">
            ~ {association}
          </span>
        </span>
      </div>
    </div>
  );
};

export default HomepageComment;
