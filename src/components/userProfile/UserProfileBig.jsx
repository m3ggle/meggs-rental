import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../common/Btn";
import UserProfileHeader from "./UserProfileHeader";

const UserProfileBig = ({ userProfileData = {}, showButton = true }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => navigate("/chat");

  return (
    <div className="flex h-[242] w-full flex-col items-center gap-y-2">
      <UserProfileHeader userProfileData={userProfileData} />
      {showButton && (
        <Btn
          type="button"
          uiType="primary"
          title="Contact Owner"
          onClick={handleButtonClick}
        />
      )}
    </div>
  );
};

export default UserProfileBig;
