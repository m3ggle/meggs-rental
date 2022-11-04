// <UserProfileSmall review={true} rating="4.5/5" text="Click to view the owners account" displayName="Meggle Bande" />
import React from "react";

const UserProfileSmall = ({ review, displayName, text, rating }) => {
  return (
    <div className="flex h-11 w-full items-center gap-x-2">
      {/* pic */}
      <div
        className="h-11 min-h-[44px] w-11 min-w-[44px] rounded-full bg-black bg-cover bg-center shadow"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80)",
        }}
      ></div>

      {/* info */}
      <div className="flex w-full flex-col gap-y-[2px]">
        <div className="flex w-full items-center justify-between">
          <span className="text-sm text-lmGrey500 dark:text-dmGrey100">{displayName}</span>
          {review && (
            <span className="flex items-center gap-x-[2px] text-xs text-lmGrey400 dark:text-dmGrey300">
              {rating}{" "}
              <div className="fa-solid fa-star text-[12px] text-yellow-400"></div>
            </span>
          )}
        </div>
        <span className="text-xs text-lmGrey300 dark:text-dmGrey300">{text}</span>
      </div>
    </div>
  );
};

export default UserProfileSmall;
