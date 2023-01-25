import React from "react";
import { useUserContext } from "../../../context/user/userContext";
import UserProfileSmall from "../../userProfile/UserProfileSmall";

const NavbarProfile = ({ handleClickNavigation }) => {
  const { userName, profilePictureUrl, userId } = useUserContext();

  const dummyFunction = () => {
    return;
  };

  return (
    <div className="flex w-[360px] items-center px-8 py-2">
      <div
        onClick={() => handleClickNavigation("/profile")}
        className="w-full cursor-pointer rounded-lg px-4 py-3 duration-300 hover:bg-white dark:hover:bg-dmGrey800"
      >
        <UserProfileSmall
          text="Click to view the owners account"
          uid={userId}
          displayName={userName}
          photoUrl={profilePictureUrl}
          callbackFunction={dummyFunction}
        />
      </div>
    </div>
  );
};

export default NavbarProfile;
