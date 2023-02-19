import { formatRelative } from "date-fns";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../components/Loading";
import UserProfileSmall from "../../../../components/userProfile/UserProfileSmall";
import { useUserContext } from "../../../../context/user/userContext";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import ChatInfo from "../chatInfo/ChatInfo";

const ChatHeader = ({ chatInformation, chatInformationLoading }) => {
  const { userId } = useUserContext();

  // chat info modal
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const navigate = useNavigate();
  const handleGoBack = () => navigate("/chat/menu");

  const windowSize = useWindowSize();

  return (
    <div className="flex min-h-[106px] w-full items-center justify-between gap-y-2 px-6 pb-6 pt-9">
      <div className="flex w-[240px] items-center gap-x-4 600:w-[320px]">
        {windowSize.width < 1000 && (
          <i
            onClick={handleGoBack}
            className="fa-solid fa-chevron-left h-fit w-7 text-[24px] text-lmGrey300 hover:text-lmGrey600"
          />
        )}
        {chatInformationLoading ? (
          <Loading />
        ) : (
          <UserProfileSmall
            text={
              userId === chatInformation.owner_id
                ? chatInformation.borrower_is_online
                  ? "Currently online"
                  : formatRelative(
                      new Date(chatInformation.borrower_last_online),
                      new Date()
                    )
                : chatInformation.owner_is_online
                ? "Currently online"
                : formatRelative(
                    new Date(chatInformation.owner_last_online),
                    new Date()
                  )
            }
            displayName={
              userId === chatInformation.owner_id
                ? chatInformation.borrower_user_name
                : chatInformation.owner_user_name
            }
            photoUrl={
              userId === chatInformation.owner_id
                ? chatInformation.borrower_profile_picture_url
                : chatInformation.owner_profile_picture_url
            }
          />
        )}
      </div>
      <div
        onClick={openModal}
        className="fa-solid fa-bars-staggered flex h-12 w-12 rotate-180 cursor-pointer items-center justify-center rounded-full text-[24px] text-lmGrey300 duration-300 hover:bg-lmGrey50 hover:text-lmGrey600"
      />
      <ChatInfo
        isOpen={isOpen}
        closeModal={closeModal}
        chatInformation={chatInformation}
      />
    </div>
  );
};

export default ChatHeader;
