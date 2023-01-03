import { Dialog } from "@headlessui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../../../components/common/Btn";
import Location from "../../../../components/Location";
import Calendar from "../../../../components/offerDetails/Calendar";
import UserProfileSmall from "../../../../components/userProfile/UserProfileSmall";
import ExampleData from "../../../../ExampleData";
import PreviewBasicInfo from "../../../explore/map/components/preview/components/PreviewBasicInfo";
import PreviewImgs from "../../../explore/map/components/preview/components/PreviewImgs";
import ChatInfoWrapper from "./ChatInfoWrapper";

const { exampleOffers } = ExampleData();

const ChatInfo = ({ isOpen, closeModal }) => {
  const navigate = useNavigate();
  const handleViewOffer = () => {
    navigate("/offer-details/4469d428-3ee6-42a3-ad96-a5e42b481379");
  };

  const offerInformation = exampleOffers[0];

  return (
    <ChatInfoWrapper isOpen={isOpen} closeModal={closeModal}>
      <Dialog.Panel className="hideScrollbar absolute top-20 right-0 h-fit w-full overflow-scroll 600:top-7 600:right-6 600:w-fit 600:pb-7">
        <button className="absolute opacity-0" aria-hidden="true"></button>
        <div className="flex h-fit w-full flex-col gap-y-6 rounded-2xl bg-white p-6 shadow-lg dark:bg-dmGrey900 600:w-[360px]">
          {/* header */}
          <div className="flex items-center justify-between">
            <span className="text-2xl text-lmGrey700 dark:text-dmGrey25">
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
            <PreviewImgs offerImages={offerInformation.photoURL} />
            <div className="flex h-full w-full flex-col gap-y-1 rounded-xl bg-white p-6 shadow dark:mt-1 dark:bg-dmGrey900 dark:shadow-dmShadow">
              <PreviewBasicInfo offerInformation={offerInformation} />
            </div>
            <Calendar
              dates={offerInformation.calendar}
              shadowUI={true}
              header={true}
            />
            <div
              className={`flex h-[256px] w-full flex-col gap-y-1 overflow-hidden rounded-xl bg-cover bg-center shadow dark:bg-dmGrey900 dark:shadow-dmShadow`}
            >
              <Location
                lng={offerInformation.location.lng}
                lat={offerInformation.location.lat}
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
    </ChatInfoWrapper>
  );
};

export default ChatInfo;
