import React from "react";
import { useLocation } from "react-router-dom";
import { useUserDetailsModalContext } from "../../context/userDetailsModal/userDetailsModalContext";
import { getAge } from "../../helper/getAge";

const UserProfileHeader = ({ userProfileData = {}, modal = false }) => {
  const { firstName, lastName, birthday, email, photoURL, uid } =
    userProfileData;

  const { openUserDetailsModal } = useUserDetailsModalContext();
  const locationPath = useLocation().pathname;

  const handleClick = () => {
    if (locationPath === "/profile") {
      console.log("choose a image as your new profile pic");
      return
    }
    if (!modal) openUserDetailsModal(uid);
  };

  return (
    <div
      onClick={handleClick}
      className="flex w-full cursor-pointer flex-col items-center gap-y-2"
    >
      <div
        className="h-[84px] w-[84px] overflow-hidden rounded-full bg-cover bg-center shadow"
        style={{ backgroundImage: `url(${photoURL})` }}
      >
        {locationPath === "/profile" && (
          <i className="fa-solid fa-camera flex h-full w-full items-center justify-center bg-lmGrey900/20 text-[28px] text-lmGrey100/60 duration-300 hover:bg-lmGrey900/60 hover:text-lmGrey25" />
        )}
      </div>
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
  );
};

export default UserProfileHeader;
