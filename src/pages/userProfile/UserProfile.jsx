import React from "react";
import LittleOfferCardList from "../../components/LittleOfferCardList";
import ReviewSection from "../../components/ratings/ReviewSection";
import UserProfileHeader from "../../components/userProfile/UserProfileHeader";
import ExampleData from "../../ExampleData";

const UserProfile = () => {
  const { userProfileBig } = ExampleData();
  const { firstName, lastName, birthday, email } = userProfileBig;

  return (
    <div className="relative flex w-full max-w-[820px] flex-col items-center overflow-y-scroll rounded-t-2xl p-6 600:pt-12 shadow">
      <div className="fa-solid fa-times text-[24px] absolute text-lmGrey700 top-6 600:top-10 right-6 600:right-12"></div>
      <div className="flex w-full max-w-[472px] flex-col items-center justify-center gap-y-6">
        {/* header */}
        <div className="flex flex-col gap-4">
          <UserProfileHeader
            firstName={firstName}
            lastName={lastName}
            birthday={birthday}
            email={email}
          />
          <span className="text-sm text-lmGrey600">
            I rather take my bike or the OVP to the Uni so I don’t really have a
            need for my cars. If you like any of my offer(s), don’t be scared to
            send me a Message 😊.
          </span>
        </div>

        {/* offer */}
        <div className="flex w-full flex-col gap-2">
          <span className="text-base font-semibold text-lmGrey700">Offers</span>
          <LittleOfferCardList />
        </div>

        {/* rating */}
        <div className="flex w-full flex-col gap-2">
          <span className="text-base font-semibold text-lmGrey700">
            Ratings
          </span>
          <ReviewSection />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
