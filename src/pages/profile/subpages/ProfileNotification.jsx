import React from "react";
import SignWrapper from "../../../components/wrapper/SignWrapper";
import ExampleData from "../../../ExampleData";
import ProfileSubPageHeader from "../components/ProfileSubPageHeader";

const { userProfileBig } = ExampleData();

const ProfileNotification = () => {
  return (
    <SignWrapper puffer={false} pic={userProfileBig.photoURL}>
      <div className="flex w-full max-w-[348px] flex-col gap-y-3 overflow-y-scroll px-[2px] py-6">
        <ProfileSubPageHeader title="Notification" />
        <span className="w-full text-center text-lmGrey600 dark:text-dmGrey100">
          Currently not available
        </span>
      </div>
    </SignWrapper>
  );
};

export default ProfileNotification;
