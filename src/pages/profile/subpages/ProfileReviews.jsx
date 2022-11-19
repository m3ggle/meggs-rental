import React from "react";
import ReviewSection from "../../../components/ratings/ReviewSection";
import SignWrapper from "../../../components/SignWrapper";
import ExampleData from "../../../ExampleData";
import ProfileSubPageHeader from "../components/ProfileSubPageHeader";

const { userProfileBig } = ExampleData();

const ProfileReviews = () => {
  return (
    <SignWrapper puffer={false} pic={userProfileBig.photoUrl}>
      <div className="flex w-full max-w-[348px] flex-col gap-y-3 overflow-y-scroll px-[2px] py-6">
        <ProfileSubPageHeader title="Reviews" />
        <ReviewSection />
      </div>
    </SignWrapper>
  );
};

export default ProfileReviews;
