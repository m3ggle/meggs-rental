import React from "react";
import ReviewSection from "../../../components/ratings/ReviewSection";
import SignWrapper from "../../../components/wrapper/SignWrapper";
import { useUserContext } from "../../../context/user/userContext";
import ProfileSubPageHeader from "../components/ProfileSubPageHeader";


const ProfileReviews = () => {
  const { profilePictureUrl } = useUserContext();

  return (
    <SignWrapper puffer={false} pic={profilePictureUrl}>
      <div className="flex w-full max-w-[348px] flex-col gap-y-3 overflow-y-scroll px-[2px] py-6">
        <ProfileSubPageHeader title="Reviews" />
        <ReviewSection />
      </div>
    </SignWrapper>
  );
};

export default ProfileReviews;
