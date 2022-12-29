import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../../../components/common/Btn";
import { useUserContext } from "../../../../context/user/userContext";

const HomepageNavbarRight = () => {
  const { signedIn, userData, verified } = useUserContext();
  const navigate = useNavigate();

  const renderContent = () => {
    // not signed in
    if (!signedIn) {
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
    }

    // not verified
    if (!verified) {
      return (
        <>
          <span className="text-lg text-lmGrey600 dark:text-dmGrey25">
            please verify
          </span>
          <div
            className="h-11 w-11 overflow-hidden rounded-full bg-blue-200 bg-cover bg-center dark:bg-blue-800"
            style={{
              backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FplaceholderPhoto.webp?alt=media&token=59ad9960-a335-41dd-83bf-e816d630e677)`,
            }}
          />
        </>
      );
    }

    // verified
    if (verified) {
      return (
        <>
          <span
            onClick={() => navigate("/profile")}
            className="text-lg text-lmGrey800 dark:text-dmGrey25"
          >
            {userData.firstName} {userData.lastName}
          </span>
          <div
            onClick={() => navigate("/profile")}
            className="h-11 w-11 overflow-hidden rounded-full bg-blue-200 bg-cover bg-center dark:bg-blue-800"
            style={{
              backgroundImage: `url(${
                userData.photoURL ??
                "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FplaceholderPhoto.webp?alt=media&token=59ad9960-a335-41dd-83bf-e816d630e677"
              })`,
            }}
            alt="user profile"
          />
        </>
      );
    }

    return <></>;
  };

  return (
    <div className="flex w-fit flex-row items-center justify-end gap-x-2 700:w-60">
      {renderContent()}
    </div>
  );
};

export default HomepageNavbarRight;
