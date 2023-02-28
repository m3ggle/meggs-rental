import { Dialog } from "@headlessui/react";
import { formatRelative } from "date-fns";
import React, { useRef } from "react";
import { uploadChatroom } from "../../api/supabase/uploadChatroom";
import Btn from "../../components/common/Btn";
import UserProfileSmall from "../../components/userProfile/UserProfileSmall";
import ModalWrapper from "../../components/wrapper/ModalWrapper";
import { useChatInputModalContext } from "../../context/chatInputModalContext/chatInputModalContext";
import { useNavigateToChat } from "../../hooks/useNavigateToChat";
import ChatInputModalFiller from "./ChatInputModalFiller";

const ChatInputModal = () => {
  const { isOpen, offerId, ownerInformation, borrowerInformation, closeModal } =
    useChatInputModalContext();

  const { navigateToChat } = useNavigateToChat();

  const inputRef = useRef(null);

  const onSubmit = async (text) => {
    const preparation = {
      offerId,
      ownerId: ownerInformation.userId,
      borrowerId: borrowerInformation.userId,
      messageContent: text,
    };

    const chatroomId = await uploadChatroom(preparation);
    navigateToChat({ chatroomId, offerId });
    closeModal();
  };

  const handleSubmit = (event) => {
    if (event !== undefined) {
      event.preventDefault();
      const text = inputRef.current.value.trim();
      text.length > 0 && onSubmit(text);
    }
  };

  return (
    <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
      <Dialog.Panel className="absolute bottom-0 top-20 flex h-fit w-full flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl dark:bg-dmGrey900 600:static 600:w-[572px] 600:rounded-2xl 1000:w-[600px]">
        <div className="flex h-fit w-full flex-col items-center gap-6 p-6">
          {/* header */}
          <div className="flex w-full items-center gap-x-2">
            <UserProfileSmall
              text={
                ownerInformation.isOnline
                  ? "Currently online"
                  : `Last seen: ${formatRelative(
                      new Date(ownerInformation.lastOnline),
                      new Date()
                    )}`
              }
              displayName={ownerInformation.userName}
              photoUrl={ownerInformation.profilePictureUrl}
              uid={ownerInformation.userId}
            />

            <div
              className="group flex max-h-[40px] min-h-[40px] w-10 min-w-[40px] max-w-[40px] cursor-pointer items-center justify-center rounded-full duration-300 hover:bg-lmGrey50 dark:hover:text-dmGrey600"
              onClick={closeModal}
            >
              <i className="fa-solid fa-times text-[24px] text-lmGrey300 duration-300 group-hover:text-lmGrey600 dark:text-dmGrey300 group-hover:dark:text-dmGrey100" />
            </div>
          </div>

          {/* filler */}
          <ChatInputModalFiller />

          {/* input area */}
          <form
            onSubmit={handleSubmit}
            className="flex h-[84px] w-full gap-x-2"
          >
            <div className="flex w-full rounded-lg bg-lmGrey50 p-3 shadow-sm dark:bg-dmGrey800">
              <textarea
                rows="10"
                type="text"
                name="chatModalInput"
                autoFocus={true}
                ref={inputRef}
                placeholder="Write the first message"
                className="h-[60px] w-full break-words bg-transparent text-sm text-lmGrey600 outline-none duration-300 placeholder:text-dmGrey300 focus:outline-none dark:text-dmGrey25 placeholder:dark:text-dmGrey300"
              />
            </div>
            <div className="flex h-full w-fit flex-col items-center justify-end">
              <div className="h-fit w-fit duration-300">
                <Btn
                  type="submit"
                  uiType="primary"
                  icon="fa-solid fa-chevron-right"
                  onClick={handleSubmit}
                />
              </div>
            </div>
          </form>
        </div>
      </Dialog.Panel>
    </ModalWrapper>
  );
};

export default ChatInputModal;
