import { Dialog } from "@headlessui/react";
import React from "react";
import ReviewSection from "../../components/ratings/ReviewSection";
import LittleOfferCardList from "../../components/userProfile/LittleOfferCardList";
import UserProfileHeader from "../../components/userProfile/UserProfileHeader";
import ExampleData from "../../ExampleData";
import ModalWrapper from "../../layouts/ModalWrapper";

const UserProfile = ({ isOpen, closeModal }) => {
  const { userProfileBig } = ExampleData();
  const { firstName, lastName, birthday, email } = userProfileBig;

  return (
    <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
      <div className="flex w-full max-w-[472px] flex-col items-center justify-center gap-y-6">
        <div className="flex flex-col gap-4">
          <UserProfileHeader
            firstName={firstName}
            lastName={lastName}
            birthday={birthday}
            email={email}
          />
          <Dialog.Description className="text-sm text-lmGrey600 dark:text-dmGrey100">
            I rather take my bike or the OVP to the Uni so I don’t really have a
            need for my cars. If you like any of my offer(s), don’t be scared to
            send me a Message 😊.
          </Dialog.Description>
        </div>

        <div className="flex w-full flex-col gap-2">
          <span className="text-base font-semibold text-lmGrey700 dark:text-dmGrey25">
            Offers
          </span>
          <LittleOfferCardList closeModal={closeModal} />
        </div>
        <div className="flex w-full flex-col gap-2">
          <span className="text-base font-semibold text-lmGrey700 dark:text-dmGrey25">
            Ratings
          </span>
          <ReviewSection />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default UserProfile;
