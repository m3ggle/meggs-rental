import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserProfileSmall from "../../../../components/userProfile/UserProfileSmall";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import ChatInfo from "../chatInfo/ChatInfo";

const ChatMainHeader = () => {
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const navigate = useNavigate();
  const windowSize = useWindowSize();

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
        <UserProfileSmall
          text="Online"
          displayName="Meggle Bande"
          profilePic="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2264&q=80"
        />
      </div>
      <div
        onClick={openModal}
        className="fa-solid fa-bars-staggered flex h-12 w-12 rotate-180 cursor-pointer items-center justify-center rounded-full text-[24px] text-lmGrey300 duration-300 hover:bg-lmGrey50 hover:text-lmGrey600"
      />
      {/* <ChatInfo isOpen={isOpen} closeModal={closeModal} /> */}
    </div>
  );
};

export default ChatMainHeader;
