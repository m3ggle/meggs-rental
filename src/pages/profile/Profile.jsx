import React from "react";
import SignWrapper from "../../components/SignWrapper";
import UserProfileHeader from "../../components/userProfile/UserProfileHeader";
import ExampleData from "../../ExampleData";
import ProfileButton from "./view/ProfileButton";

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
        <div className="flex flex-col gap-y-2 py-3">
          <ProfileButton
            btnTitle="Account"
            icon="fa-solid fa-user"
            link="account"
          />
          <ProfileButton
            btnTitle="Payments"
            icon="fa-solid fa-credit-card"
            link="payments"
          />
          <ProfileButton
            btnTitle="Ratings"
            icon="fa-solid fa-star"
            link="ratings"
          />
          <ProfileButton
            btnTitle="Notification"
            icon="fa-solid fa-bell"
            link="notification"
          />
          <ProfileButton
            btnTitle="Help"
            icon="fa-solid fa-handshake-angle"
            link="help"
          />
          <ProfileButton
            btnTitle="Terms of Service"
            icon="fa-solid fa-section"
            link="terms-of-service"
          />
          <ProfileButton
            btnTitle="Privacy Policy"
            icon="fa-solid fa-user-shield"
            link="privacy-policy"
          />
          <ProfileButton
            btnTitle="Sign Out"
            icon="fa-solid fa-right-from-bracket"
            link="/sign-in"
          />
        </div>
      </div>
    </SignWrapper>
  );
};

export default Profile;
