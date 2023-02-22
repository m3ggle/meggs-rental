import React from "react";
import SignWrapper from "../../../components/wrapper/SignWrapper";
import { useUserContext } from "../../../context/user/userContext";
import ProfileSubPageHeader from "../components/ProfileSubPageHeader";

const ProfileNotification = () => {
  const { profilePictureUrl} = useUserContext()
  
  return (
    <SignWrapper puffer={false} pic={profilePictureUrl}>
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
