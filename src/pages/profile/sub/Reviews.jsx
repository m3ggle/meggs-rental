import React from "react";
import ReviewSection from "../../../components/ratings/ReviewSection";
import SignWrapper from "../../../components/SignWrapper";
import ProfileHeader from "../view/ProfileHeader";

const Reviews = () => {
  return (
    <SignWrapper
      puffer={false}
      pic="https://images.unsplash.com/photo-1658391157361-43b9984cbddf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    >
      <div className="flex w-full max-w-[348px] flex-col gap-y-3 overflow-y-scroll px-[2px] py-6">
        <ProfileHeader title="Reviews" />
        <ReviewSection />
      </div>
    </SignWrapper>
  );
};

export default Reviews;
