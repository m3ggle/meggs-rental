import React from "react";
import UserProfileHeader from "../../components/userProfile/UserProfileHeader";
import PageAuthChecker from "../../components/wrapper/PageAuthChecker";
import SignWrapper from "../../components/wrapper/SignWrapper";
import { useUserContext } from "../../context/user/userContext";
import ProfileButtonList from "./components/ProfileButtonList";
import { profileButtonListData } from "./data/profileButtonListData";

const Profile = () => {
  const { userData } = useUserContext();
  if (userData !== null) {
    console.log("profile: ", userData.email);
}

  return (
    <PageAuthChecker>
      {userData !== null && (
        <SignWrapper puffer={false} pic={userData.photoURL}>
          <div className="relative flex w-full max-w-[348px] h-screen max-h-screen flex-col gap-y-3 px-[2px] overflow-hidden">
            <UserProfileHeader userProfileData={userData} />
            <ProfileButtonList profileButtonList={profileButtonListData} />
            <div className="w-full absolute bottom-0 h-12 bg-gradient-to-t from-white dark:from-dmGrey900" />
          </div>
        </SignWrapper>
      )}
    </PageAuthChecker>
  );
};

export default Profile;
