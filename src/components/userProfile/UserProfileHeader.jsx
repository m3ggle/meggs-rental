import { formatRelative } from "date-fns";
import React from "react";
import { useLocation } from "react-router-dom";
import supabase from "../../config/supabaseClient";
import { useUserDetailsModalContext } from "../../context/userDetailsModal/userDetailsModalContext";
import { compressImages } from "../../helpers/compressImages";
import { queryClient } from "../../api/reactQuery/queryClient";

const UserProfileHeader = ({
  userProfileData = {},
  modal = false,
  clickCallback,
}) => {
  const {
    userId,
    profilePictureUrl,
    userName,
    isOnline,
    lastOnline,
    firstName,
    lastName,
  } = userProfileData;

  const { openUserDetailsModal } = useUserDetailsModalContext();
  const locationPath = useLocation().pathname;

  const handleClick = () => {
    if (locationPath === "/profile") {
      return;
    }
    if (!modal) openUserDetailsModal(userId);
  };

  return (
    <div
      onClick={handleClick}
      className="flex w-full cursor-pointer flex-col items-center gap-y-2"
    >
      <div
        className="group relative h-[84px] w-[84px] overflow-hidden rounded-full bg-cover bg-center shadow"
        style={{ backgroundImage: `url(${profilePictureUrl})` }}
      >
        {locationPath === "/profile" && !modal && (
          <>
            <i className="fa-solid fa-camera flex h-full w-full items-center justify-center bg-lmGrey900/20 text-[28px] text-lmGrey100/60 duration-300 group-hover:bg-lmGrey900/60 group-hover:text-lmGrey25" />
            <input
              onChange={clickCallback}
              type="file"
              name="fileUpload"
              multiple={true}
              accept=".jpg, .jpeg, .png"
              className="absolute top-0 h-[84px] w-[84px] cursor-pointer opacity-0"
            />
          </>
        )}
      </div>
      <div className="flex w-full flex-col items-center gap-y-[2px]">
        <span className="text-lg text-lmGrey800 dark:text-dmGrey25">
          @{userName}
        </span>
        <div className="flex w-full flex-col items-center justify-center gap-y-0">
          <span className="text-base text-lmGrey600 dark:text-dmGrey100">
            {firstName} {lastName}
          </span>
          <span className="text-base text-lmGrey600 dark:text-dmGrey100">
            {isOnline
              ? "Currently online"
              : `last seen: ${formatRelative(
                  new Date(lastOnline),
                  new Date()
                )}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserProfileHeader;
