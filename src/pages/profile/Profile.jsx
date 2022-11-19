import React from "react";
import SignWrapper from "../../components/SignWrapper";
import UserProfileHeader from "../../components/userProfile/UserProfileHeader";
import ExampleData from "../../ExampleData";
import ProfileButtonList from "./components/ProfileButtonList";
import { profileButtonListData } from "./data/profileButtonListData";

const Profile = () => {
  const { userProfileBig } = ExampleData();
  const { firstName, lastName, birthday, email } = userProfileBig;

  return (
    <SignWrapper
      puffer={false}
      pic="https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80"
    >
      <div className="flex w-full max-w-[348px] flex-col gap-y-3 overflow-y-scroll px-[2px]">
        <UserProfileHeader
          firstName={firstName}
          lastName={lastName}
          birthday={birthday}
          email={email}
        />
        <ProfileButtonList profileButtonList={profileButtonListData} />
      </div>
    </SignWrapper>
  );
};

export default Profile;
