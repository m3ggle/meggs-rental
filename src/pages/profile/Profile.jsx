import React from "react";
import SignWrapper from "../../components/SignWrapper";
import UserProfileHeader from "../../components/userProfile/UserProfileHeader";
import ExampleData from "../../ExampleData";
import ProfileButtonList from "./components/ProfileButtonList";
import { profileButtonListData } from "./data/profileButtonListData";

const { userProfileBig } = ExampleData();

const Profile = () => {
  return (
    <SignWrapper puffer={false} pic={userProfileBig.photoUrl}>
      <div className="flex w-full max-w-[348px] flex-col gap-y-3 overflow-y-scroll px-[2px]">
        <UserProfileHeader userProfileData={userProfileBig} />
        <ProfileButtonList profileButtonList={profileButtonListData} />
      </div>
    </SignWrapper>
  );
};

export default Profile;
