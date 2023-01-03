import { Dialog } from "@headlessui/react";
import React from "react";
import ReviewSection from "../../components/ratings/ReviewSection";
import UserDetailsModalOffer from "../../components/userProfile/UserDetailsModalOffer";

import UserProfileHeader from "../../components/userProfile/UserProfileHeader";
import ModalWrapperTypeBottom from "../../components/wrapper/ModalWrapperTypeBottom";
import { useUserDetailsModalContext } from "../../context/userDetailsModal/userDetailsModalContext";

const UserDetailsModal = () => {
  const { isOpen, closeUserDetailsModal, modalData, error } =
    useUserDetailsModalContext();

  return (
    <ModalWrapperTypeBottom isOpen={isOpen} closeModal={closeUserDetailsModal}>
      {error !== null ? (
        // if error
        <div className="flex h-full w-full items-center justify-center">
          <span>{error.message}</span>
        </div>
      ) : modalData !== null ? (
        // if everything is alright and its finished fetching the modalData
        <div className="flex w-full max-w-[472px] flex-col items-center justify-center gap-y-6">
            {/* header */}
          <div className="flex flex-col gap-4">
            <UserProfileHeader
              userProfileData={modalData.userData}
              modal={true}
            />
            <Dialog.Description className="text-sm text-lmGrey600 dark:text-dmGrey100">
              {modalData.userData.bio}
            </Dialog.Description>
          </div>
          {/* offers */}
          <UserDetailsModalOffer
            offers={modalData.userOffers}
            closeModal={closeUserDetailsModal}
          />
          {/* reviews */}
          <ReviewSection reviewSection={modalData.reviewSection} />
        </div>
      ) : (
        // else its loading
        <div className="flex h-full w-full items-center justify-center">
          <span>Loading... :D</span>
        </div>
      )}
    </ModalWrapperTypeBottom>
  );
};

export default UserDetailsModal;
