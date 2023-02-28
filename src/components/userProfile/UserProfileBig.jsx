import React from "react";
import Btn from "../common/Btn";
import UserProfileHeader from "./UserProfileHeader";

const UserProfileBig = ({
  userProfileData = {},
  showButton = true,
  onCallback = () => {},
}) => {
  return (
    <div className="flex h-[242] w-full flex-col items-center gap-y-2">
      <UserProfileHeader userProfileData={userProfileData} />
      {showButton && (
        <Btn
          type="button"
          uiType="primary"
          title="Contact Owner"
          onClick={onCallback}
        />
      )}
    </div>
  );
};

export default UserProfileBig;
