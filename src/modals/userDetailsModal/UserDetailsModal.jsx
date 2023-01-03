import { Dialog } from "@headlessui/react";
import React from "react";
import ReviewSection from "../../components/ratings/ReviewSection";
import LittleOfferCardList from "../../components/userProfile/LittleOfferCardList";
import UserProfileHeader from "../../components/userProfile/UserProfileHeader";
import ModalWrapperTypeBottom from "../../components/wrapper/ModalWrapperTypeBottom";
import { useUserDetailsModalContext } from "../../context/userDetailsModal/userDetailsModalContext";

const UserDetailsModal = () => {
  const { isOpen, closeUserDetailsModal, modalData, error } =
    useUserDetailsModalContext();

    console.log("hallo from user details")
  
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
          <div className="flex flex-col gap-4">
            <UserProfileHeader userProfileData={modalData.userData} />
            <Dialog.Description className="text-sm text-lmGrey600 dark:text-dmGrey100">
              {modalData.userData.bio}
            </Dialog.Description>
          </div>

          <div className="flex w-full flex-col gap-2">
            <span className="text-base font-semibold text-lmGrey700 dark:text-dmGrey25">
              Offers
            </span>
            <LittleOfferCardList
              offers={modalData.userOffers}
              closeModal={closeUserDetailsModal}
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <span className="text-base font-semibold text-lmGrey700 dark:text-dmGrey25">
              Ratings
            </span>
            <ReviewSection reviews={modalData.reviews}  />
          </div>
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
