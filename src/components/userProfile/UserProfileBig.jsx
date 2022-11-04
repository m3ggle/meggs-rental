import React from "react";
import { getAge } from "../../utilities/getAge";

const UserProfileBig = ({ userData }) => {
  const {firstName, lastName, birthday, email, reviewsCount, joined, identityVerified} = userData

  return (
    <div className="flex w-full flex-col items-center gap-y-2 rounded-3xl bg-white p-6 shadow-md">
      {/* header */}
      <div className="flex w-full flex-col items-center gap-y-2">
        <div
          className="h-[84px] w-[84px] rounded-full bg-cover bg-center shadow"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80)",
          }}
        ></div>
        <div className="flex w-full flex-col items-center gap-y-[2px] text-sm text-lmGrey600 dark:text-dmGrey100">
          <div className="flex w-full items-center justify-center gap-x-[2px]">
            <span className="w-full truncate text-right text-lg text-lmGrey800 dark:text-dmGrey25">
              {firstName} {lastName}
            </span>
            <div className="text-lg">•</div>
            <span className="w-full truncate text-left text-sm">
              {getAge(birthday)} years old
            </span>
          </div>
          <span>{email}</span>
        </div>
      </div>

      {/* mid */}
      <div className="flex w-full flex-col items-center justify-center text-sm text-lmGrey400 dark:text-dmGrey300">
        <div className="flex w-full items-center justify-center gap-x-[2px]">
          <span className="w-full truncate text-right">Joined in {joined}</span>
          <div className="text-lg">•</div>
          <span className="flex w-full items-center gap-x-1 truncate text-left">
            {reviewsCount} {reviewsCount === "1" ? "Review" : "Reviews"}
            <div className="fa-solid fa-star text-yellow-400"></div>
          </span>
        </div>
        {identityVerified ? (
          <span>
            Identity verified <div className="fa-solid fa-shield-halved"></div>
          </span>
        ) : (
          <span>
            Identity not verified
          </span>
        )}
      </div>

      {/* btn */}
      <button className="w-full rounded-lg bg-lmPrimary py-3 text-sm font-semibold text-white dark:bg-dmPrimary">
        Contact Owner
      </button>
    </div>
  );
};

export default UserProfileBig;

// pic: https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80
