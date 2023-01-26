import React from "react";
import UserProfileHeader from "../../components/userProfile/UserProfileHeader";
import PageAuthChecker from "../../components/wrapper/PageAuthChecker";
import SignWrapper from "../../components/wrapper/SignWrapper";
import { useUserContext } from "../../context/user/userContext";
import ProfileButtonList from "./components/ProfileButtonList";
import { profileButtonListData } from "./data/profileButtonListData";

const Profile = () => {
  const { userId, profilePictureUrl, userName, isOnline, createdAt } = useUserContext();
  const userData = {
    userId,
    profilePictureUrl,
    userName,
    isOnline,
    createdAt,
  };

  return (
    <PageAuthChecker>
      {userId !== null && (
        <SignWrapper puffer={false} pic={profilePictureUrl}>
          <div className="relative flex h-screen max-h-screen w-full max-w-[348px] flex-col gap-y-3 overflow-hidden px-[2px]">
            <UserProfileHeader userProfileData={userData} />
            <ProfileButtonList profileButtonList={profileButtonListData} />
            <div className="absolute bottom-0 h-12 w-full bg-gradient-to-t from-white dark:from-dmGrey900" />
          </div>
        </SignWrapper>
      )}
    </PageAuthChecker>
  );
};

export default Profile;
