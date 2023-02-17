import { formatRelative } from "date-fns";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetChatParticipants } from "../../../../api/supabase/useGetChatParticipants";
import Loading from "../../../../components/Loading";
import UserProfileSmall from "../../../../components/userProfile/UserProfileSmall";
import { useUserContext } from "../../../../context/user/userContext";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import ChatInfo from "../chatInfo/ChatInfo";

const ChatMainHeader = () => {
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const navigate = useNavigate();
  const windowSize = useWindowSize();

  const { userId } = useUserContext();
  const { getSingleParam } = useUrlManipulation();

  const { chatParticipants, isLoading } = useGetChatParticipants(
    getSingleParam("chatId")
  );

  const handleGoBack = () => navigate("/chat/sidebar");

  return (
    <div className="flex min-h-[106px] w-full items-center justify-between gap-y-2 px-6 pb-6 pt-9">
      <div className="flex w-[240px] items-center gap-x-4 600:w-[320px]">
        {windowSize.width < 1000 && (
          <i
            onClick={handleGoBack}
            className="fa-solid fa-chevron-left h-fit w-7 text-[24px] text-lmGrey300 hover:text-lmGrey600"
          />
        )}
        {isLoading ? (
          <Loading />
        ) : (
          <UserProfileSmall
            text={
              userId === chatParticipants.owner_id
                ? chatParticipants.borrower_is_online
                  ? "Currently online"
                  : formatRelative(
                      new Date(chatParticipants.borrower_last_online),
                      new Date()
                    )
                : chatParticipants.owner_is_online
                ? "Currently online"
                : formatRelative(
                    new Date(chatParticipants.owner_last_online),
                    new Date()
                  )
            }
            displayName={
              userId === chatParticipants.owner_id
                ? chatParticipants.borrower_user_name
                : chatParticipants.owner_user_name
            }
            photoUrl={
              userId === chatParticipants.owner_id
                ? chatParticipants.borrower_profile_picture_url
                : chatParticipants.owner_profile_picture_url
            }
          />
        )}
      </div>
      <div
        onClick={openModal}
        className="fa-solid fa-bars-staggered flex h-12 w-12 rotate-180 cursor-pointer items-center justify-center rounded-full text-[24px] text-lmGrey300 duration-300 hover:bg-lmGrey50 hover:text-lmGrey600"
      />
      <ChatInfo isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default ChatMainHeader;
