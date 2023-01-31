// <UserProfileSmall review={true} rating="4" text="Click to view the owners account" displayName="Meggle Bande" photoURL="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2264&q=80" />
import React from "react";
import { useUserDetailsModalContext } from "../../context/userDetailsModal/userDetailsModalContext";

const UserProfileSmall = ({
  uid = null,
  review = false,
  displayName,
  text,
  rating,
  photoUrl,
}) => {
  const { openUserDetailsModal } = useUserDetailsModalContext();

  const handleClick = () => openUserDetailsModal(uid);

  return (
    <div
      onClick={handleClick}
      className="flex h-11 w-full cursor-pointer items-center gap-x-2"
    >
      <img
        className="h-11 min-h-[44px] w-11 min-w-[44px] rounded-full object-cover object-center text-lmGrey600 shadow dark:text-dmGrey300"
        src={photoUrl}
        alt="loading"
      />
      <div className="flex w-full flex-col gap-y-[2px]">
        <div className="flex w-full items-center justify-between">
          <span className="text-sm text-lmGrey500 dark:text-dmGrey100">
            {displayName}
          </span>
          {review && (
            <span className="flex items-center gap-x-[2px] text-xs text-lmGrey400 dark:text-dmGrey300">
              {rating}/5 {""}
              <div className="fa-solid fa-star text-[12px] text-yellow-400"></div>
            </span>
          )}
        </div>
        <span className="text-xs text-lmGrey300 dark:text-dmGrey300">
          {text}
        </span>
      </div>
    </div>
  );
};

export default UserProfileSmall;
