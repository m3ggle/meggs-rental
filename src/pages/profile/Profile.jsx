import React from "react";
import UserProfileHeader from "../../components/userProfile/UserProfileHeader";
import PageAuthChecker from "../../components/wrapper/PageAuthChecker";
import SignWrapper from "../../components/wrapper/SignWrapper";
import { useUserContext } from "../../context/user/userContext";
import ProfileButtonList from "./components/ProfileButtonList";
import { profileButtonListData } from "./data/profileButtonListData";

const Profile = () => {
  const { userData } = useUserContext();

  return (
    <PageAuthChecker>
      {userData !== null && (
        <SignWrapper puffer={false} pic={userData.photoURL}>
          <div className="flex w-full max-w-[348px] flex-col gap-y-3 overflow-y-scroll px-[2px]">
            <UserProfileHeader userProfileData={userData} />
            <ProfileButtonList profileButtonList={profileButtonListData} />
          </div>
        </SignWrapper>
      )}
    </PageAuthChecker>
  );
};

export default Profile;
