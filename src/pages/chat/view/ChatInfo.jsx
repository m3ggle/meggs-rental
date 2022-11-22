import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Bmw1 from "../../../assets/img/bmw1.jpg";
import Bmw2 from "../../../assets/img/bmw2.jpg";
import Bmw3 from "../../../assets/img/bmw3.jpg";
import Bmw4 from "../../../assets/img/bmw4.jpg";
import Bmw5 from "../../../assets/img/bmw5.jpg";
import GoogleMap from "../../../assets/img/googleMap.png";
import Btn from "../../../components/common/Btn";
import Calendar from "../../../components/offerDetails/Calendar";
import UserProfileSmall from "../../../components/userProfile/UserProfileSmall";
import styles from "../../../style";

const picArray = [Bmw1, Bmw2, Bmw3, Bmw4, Bmw5];

const ChatInfo = ({ isOpen, closeModal }) => {
  const navigate = useNavigate()
  const handleViewOffer = () => {
    navigate("/offer-details/4469d428-3ee6-42a3-ad96-a5e42b481379")
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="z-50" onClose={closeModal}>
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
            className="fixed inset-0 z-40 bg-black bg-opacity-25"
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
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="relative h-full w-full"></div>
            <Dialog.Panel className="hideScrollbar absolute top-20 right-0 h-fit w-full overflow-scroll 600:top-7 600:right-6 600:w-fit 600:pb-7">
              <button
                className="absolute opacity-0"
                aria-hidden="true"
              ></button>
              <div className="flex h-fit w-full flex-col gap-y-6 rounded-2xl bg-white p-6 shadow-lg dark:bg-dmGrey900 600:w-[360px]">
                {/* header */}
                <div className="flex items-center justify-between">
                  <span className="text-xl text-lmGrey700 dark:text-dmGrey25">
                    Details
                  </span>
                  <i
                    onClick={closeModal}
                    className="fa-solid fa-times cursor-pointer text-[24px] text-lmGrey700 dark:text-dmGrey25"
                  />
                </div>
                {/* parti... */}
                <div className="flex flex-col gap-y-2">
                  <span className="text-lg text-lmGrey600 dark:text-dmGrey100">
                    Participants
                  </span>
                  <UserProfileSmall
                    text="Online • Burrower"
                    displayName="Nele Langrock"
                    profilePic="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2264&q=80"
                  />
                  <UserProfileSmall
                    text="Online • Owner"
                    displayName="Meggle Bande"
                    profilePic="https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80"
                  />
                </div>
                {/* original */}
                <div className="flex flex-col gap-y-2">
                  <span className="text-lg text-lmGrey600 dark:text-dmGrey100">
                    Original Offer - Snippet
                  </span>
                  <div className="flex h-fit w-full gap-x-2 overflow-x-scroll rounded-lg">
                    {picArray.map((pic, index) => (
                      <div
                        key={index}
                        className="h-[220px] w-40 min-w-[160px] rounded-lg bg-slate-100 bg-cover bg-center shadow"
                        style={{ backgroundImage: `url(${pic})` }}
                      ></div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <div
                      className={`flex h-full w-full flex-col gap-y-1 rounded-3xl bg-white p-6 shadow-md ${styles.darkModeBorder} dark:bg-dmGrey900`}
                    >
                      {/* top */}
                      <div className="flex items-center text-lmGrey600 dark:text-dmGrey100">
                        <div
                          className="fa-solid fa-location-dot mb-[3px] h-[16px] w-[16px] text-[16px]"
                          aria-hidden="true"
                        />
                        <span className="text-base">Salzbuger Straße 18</span>
                      </div>
                      <span className="text-2xl font-semibold text-lmGrey800 dark:text-dmGrey25">
                        BMW M3 E30
                      </span>
                      {/* prices */}
                      <div className="flex w-full flex-wrap items-center gap-x-[2px]">
                        <span className="text-lg text-lmPrimary dark:text-dmPrimary">
                          30€{" "}
                          <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
                            /day
                          </span>
                        </span>
                        <div className="flex items-center justify-center px-1">
                          <div className="h-1 w-1 rounded-full bg-lmGrey400"></div>
                        </div>
                        <span className="text-lg text-lmPrimary dark:text-dmPrimary">
                          150€{" "}
                          <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
                            /week
                          </span>
                        </span>
                        <div className="flex items-center justify-center px-1">
                          <div className="h-1 w-1 rounded-full bg-lmGrey400"></div>
                        </div>
                        <span className="text-lg text-lmPrimary dark:text-dmPrimary">
                          600€{" "}
                          <span className="text-sm text-lmGrey400 dark:text-dmGrey300">
                            /month
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col">
                    <div className="flex w-full flex-col items-center gap-y-1 overflow-hidden rounded-3xl bg-white shadow-md 1200:p-6 1400:p-0">
                      <div className="w-full 1200:w-[360px] 1400:w-full">
                        <Calendar />
                      </div>
                    </div>
                  </div>
                  {/* location */}
                  <div className="flex w-full flex-col">
                    <div
                      className={`${styles.darkModeBorder} flex h-[256px] w-full flex-col gap-y-1 rounded-3xl bg-white bg-cover bg-center shadow-md dark:bg-dmGrey900`}
                      style={{ backgroundImage: `url(${GoogleMap})` }}
                    />
                  </div>
                  <Btn
                    type="button"
                    uiType="primary"
                    title="View full Offer"
                    onClick={handleViewOffer}
                  />
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ChatInfo;
