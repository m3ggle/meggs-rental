import React from "react";

const HomepageComment = ({ photoUrl, comment, association, commentWidth }) => {
  commentWidth = commentWidth ?? "fit-content";

  return (
    <div className="flex min-w-fit gap-3">
      <div
        className="h-[60px] w-[60px] rounded-full bg-lmGrey200 bg-cover bg-center shadow 700:h-[88px] 700:w-[88px]"
        style={{ backgroundImage: `url(${photoUrl})` }}
      />
      <div
        style={{ width: commentWidth }}
        className="flex items-center rounded-2xl bg-white p-4 shadow"
      >
        <span className="text-base text-lmGrey600">
          {comment} <span className="text-lmGrey400">~ {association}</span>
        </span>
      </div>
    </div>
  );
};

export default HomepageComment;
