import React from "react";
import SignWrapper from "../../../components/wrapper/SignWrapper";
import ExampleData from "../../../ExampleData";
import ProfileSubPageHeader from "../components/ProfileSubPageHeader";

const { userProfileBig } = ExampleData();

const ProfilePayments = () => {
  return (
    <SignWrapper puffer={false} pic={userProfileBig.photoURL}>
      <div className="flex w-full max-w-[348px] flex-col gap-y-3 overflow-y-scroll px-[2px] py-6">
        <ProfileSubPageHeader title="Payments" />
        <span className="w-full text-center text-lmGrey600 dark:text-dmGrey100">
          Currently not available
        </span>
      </div>
    </SignWrapper>
  );
};

export default ProfilePayments;
