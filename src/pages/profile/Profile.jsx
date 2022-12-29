import React from "react";
import UserProfileHeader from "../../components/userProfile/UserProfileHeader";
import PageAuthChecker from "../../components/wrapper/PageAuthChecker";
import SignWrapper from "../../components/wrapper/SignWrapper";
import ExampleData from "../../ExampleData";
import ProfileButtonList from "./components/ProfileButtonList";
import { profileButtonListData } from "./data/profileButtonListData";

const { userProfileBig } = ExampleData();

const Profile = () => {
  return (
    <PageAuthChecker>
      <SignWrapper puffer={false} pic={userProfileBig.photoUrl}>
        <div className="flex w-full max-w-[348px] flex-col gap-y-3 overflow-y-scroll px-[2px]">
          <UserProfileHeader userProfileData={userProfileBig} />
          <ProfileButtonList profileButtonList={profileButtonListData} />
        </div>
      </SignWrapper>
    </PageAuthChecker>
  );
};

export default Profile;
