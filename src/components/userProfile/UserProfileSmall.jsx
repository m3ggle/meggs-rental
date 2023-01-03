// <UserProfileSmall review={true} rating="4" text="Click to view the owners account" displayName="Meggle Bande" photoURL="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2264&q=80" />
import React, { useCallback, useEffect, useState } from "react";
import { getUserFirestore } from "../../api/firebase/getUserFirestore";
import { useUserDetailsModalContext } from "../../context/userDetailsModal/userDetailsModalContext";

const UserProfileSmall = ({
  uid = null,
  fetchUser = false,
  review = false,
  displayName,
  text,
  rating,
  photoURL,
  callbackFunction = undefined,
}) => {
  const { openUserDetailsModal } = useUserDetailsModalContext();

  // state to store the data
  const [userData, setUserData] = useState(
    displayName && photoURL
      ? {
          displayName,
          photoURL,
        }
      : null
  );

  const handleClick = () => {
    if (callbackFunction !== undefined) {
      callbackFunction();
      return;
    }
    openUserDetailsModal(uid);
  };

  const handleFetchUserData = useCallback(async () => {
    // hopefully preventing useless fetches
    if (userData === null) {
      const result = await getUserFirestore(uid);
      if (result) {
        setUserData({
          displayName: `${result.firstName} ${result.lastName}`,
          photoURL: result.photoURL,
        });
      }
    }
  }, [uid, userData]);

  useEffect(() => {
    if (fetchUser) {
      handleFetchUserData();
    }
  }, [fetchUser, handleFetchUserData]);

  // ui
  // todo: outsource
  if (userData === null) {
    return (
      <div
        onClick={handleClick}
        className="flex h-11 w-full cursor-pointer items-center gap-x-2"
      >
        {/* pic */}
        <div className="h-11 min-h-[44px] w-11 min-w-[44px] animate-pulse rounded-full bg-lmGrey200 bg-cover bg-center shadow" />

        {/* info */}
        <div className="flex w-full flex-col gap-y-[2px]">
          <div className="flex w-full items-center justify-between">
            <span className="text-sm text-lmGrey500 dark:text-dmGrey100">
              ...
            </span>
            {review && (
              <span className="flex items-center gap-x-[2px] text-xs text-lmGrey400 dark:text-dmGrey300">
                .../5 {""}
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
  }

  if (userData === undefined) {
    return <></>;
  }

  return (
    <div
      onClick={handleClick}
      className="flex h-11 w-full cursor-pointer items-center gap-x-2"
    >
      {/* pic */}
      <img
        className="h-11 min-h-[44px] w-11 min-w-[44px] rounded-full object-cover object-center shadow"
        src={userData.photoURL}
        alt="user"
      />

      {/* info */}
      <div className="flex w-full flex-col gap-y-[2px]">
        <div className="flex w-full items-center justify-between">
          <span className="text-sm text-lmGrey500 dark:text-dmGrey100">
            {userData.displayName}
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
