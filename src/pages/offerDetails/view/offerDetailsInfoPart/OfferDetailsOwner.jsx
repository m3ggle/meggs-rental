import React, { useEffect } from "react";
import UserProfileBig from "../../../../components/userProfile/UserProfileBig";
import ExampleData from "../../../../ExampleData";

const { userProfileBig } = ExampleData();

const OfferDetailsOwner = () => {
  useEffect(() => {
    getOwner();
  }, []);
  const getOwner = () => {};

  return (
    <div className="flex gap-x-6">
      {/* bio */}
      <div className="hidden h-full w-[176px] min-w-[176px] flex-col 700:flex 1200:hidden 1400:flex">
        <span className="text-lg text-lmGrey600 dark:text-dmGrey100">
          Short Bio
        </span>
        <div
          className={`flex h-[242px] w-full flex-col gap-y-1 rounded-3xl bg-white p-6 shadow dark:bg-dmGrey900 dark:shadow-dmShadow`}
        >
          <span className="w-full text-sm text-lmGrey600 line-clamp-[9] dark:text-dmGrey300">
            I rather take my bike or the OVP to the Uni so I don’t really have a
            need for my cars. If you like any of my offer(s), don’t be scared to
            send me a Message 😊.
          </span>
        </div>
      </div>
      {/* owner */}
      <div className="flex w-full flex-col">
        <span className="text-lg text-lmGrey600 dark:text-dmGrey100">
          Owner
        </span>
        <div
          className={`rounded-3xl bg-white p-6 shadow dark:bg-dmGrey900 dark:shadow-dmShadow`}
        >
          <UserProfileBig userProfileData={userProfileBig} />
        </div>
      </div>
    </div>
  );
};

export default OfferDetailsOwner;
