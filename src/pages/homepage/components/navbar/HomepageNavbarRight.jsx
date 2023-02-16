import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../../../components/common/Btn";
import { useUserContext } from "../../../../context/user/userContext";

const HomepageNavbarRight = () => {
  const { userId, userName, profilePictureUrl } = useUserContext();
  const navigate = useNavigate();

  const renderContent = () => {
    if (userId) {
      return (
        <div
          onClick={() => navigate("/profile")}
          className="flex h-fit w-fit cursor-pointer items-center gap-x-2"
        >
          <span className="text-lg text-lmGrey800 dark:text-dmGrey25">
            {userName}
          </span>
          <img
            className="h-11 w-11 overflow-hidden rounded-full bg-blue-200 object-cover object-center dark:bg-blue-800"
            src={profilePictureUrl}
            alt="user avatar"
          />
        </div>
      );
    }

    return (
      <div className="w-fit">
        <Btn
          title="Sign In"
          uiType="primary"
          type="button"
          icon="fa-solid fa-chevron-right"
          onClick={() => navigate("/sign-in")}
        />
      </div>
    );
  };

  return (
    <div className="flex w-fit flex-row items-center justify-end gap-x-2 700:w-60">
      {renderContent()}
    </div>
  );
};

export default HomepageNavbarRight;
