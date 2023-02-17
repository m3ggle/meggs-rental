import { Dialog } from "@headlessui/react";
import React from "react";
import { useGetChatParticipants } from "../../../../api/supabase/useGetChatParticipants";
import { useGetOfferDetails } from "../../../../api/supabase/useGetOfferDetails";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";
import ChatInfoOffer from "./ChatInfoOffer";
import ChatInfoParticipants from "./ChatInfoParticipants";
import ChatInfoWrapper from "./ChatInfoWrapper";

const ChatInfo = ({ isOpen, closeModal }) => {
  const { getSingleParam } = useUrlManipulation();

  const { chatParticipants, isLoading: participantsIsLoading } =
    useGetChatParticipants(getSingleParam("chatId"));
  const { offerInformation, isLoading: offerIsLoading } = useGetOfferDetails(
    getSingleParam("offerId")
  );

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
          <ChatInfoParticipants
            chatParticipants={chatParticipants}
            participantsIsLoading={participantsIsLoading}
          />
          {/* original */}
          <ChatInfoOffer
            offerInformation={offerInformation}
            offerIsLoading={offerIsLoading}
          />
        </div>
      </Dialog.Panel>
    </ChatInfoWrapper>
  );
};

export default ChatInfo;
