import React from "react";
import SignWrapper from "../../../components/SignWrapper";
import ProfileSubPageHeader from "../components/ProfileSubPageHeader";

const ProfilePayments = () => {
  return (
    <SignWrapper
      puffer={false}
      pic="https://images.unsplash.com/photo-1658391157361-43b9984cbddf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    >
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
