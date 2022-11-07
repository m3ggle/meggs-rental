import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import LittleOfferCardList from "../../components/LittleOfferCardList";
import ReviewSection from "../../components/ratings/ReviewSection";
import UserProfileHeader from "../../components/userProfile/UserProfileHeader";
import ExampleData from "../../ExampleData";

const UserProfile = ({ isOpen, closeModal }) => {
  const { userProfileBig } = ExampleData();
  const { firstName, lastName, birthday, email } = userProfileBig;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 flex items-start justify-center"
        onClose={closeModal}
      >
        {/* backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            onClick={closeModal}
            className="fixed inset-0 bg-black bg-opacity-25"
          />
        </Transition.Child>

        {/* main */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="scroll fixed top-20 bottom-0 w-full overflow-scroll rounded-t-2xl 820:w-[820px] ">
            {/* Todo: when scrolling then top-10 or so and when the user is at top then top-20 */}
            <div className="relative flex w-full max-w-[820px] flex-col items-center rounded-t-2xl bg-white p-6 shadow dark:bg-dmGrey900 600:pt-12">
              <div
                onClick={closeModal}
                className="fa-solid fa-times absolute top-6 right-6 cursor-pointer text-[24px] text-lmGrey700 dark:text-dmGrey25 600:top-10 600:right-12"
              ></div>
              <div className="flex w-full max-w-[472px] flex-col items-center justify-center gap-y-6">
                <div className="flex flex-col gap-4">
                  <UserProfileHeader
                    firstName={firstName}
                    lastName={lastName}
                    birthday={birthday}
                    email={email}
                  />
                  <Dialog.Description className="text-sm text-lmGrey600 dark:text-dmGrey100">
                    I rather take my bike or the OVP to the Uni so I don’t
                    really have a need for my cars. If you like any of my
                    offer(s), don’t be scared to send me a Message 😊.
                  </Dialog.Description>
                </div>

                <div className="flex w-full flex-col gap-2">
                  <span className="text-base font-semibold text-lmGrey700 dark:text-dmGrey25">
                    Offers
                  </span>
                  <LittleOfferCardList />
                </div>

                <div className="flex w-full flex-col gap-2">
                  <span className="text-base font-semibold text-lmGrey700 dark:text-dmGrey25">
                    Ratings
                  </span>
                  <ReviewSection />
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default UserProfile;
