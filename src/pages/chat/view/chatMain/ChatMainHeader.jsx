import React, { useState } from 'react'
import UserProfileSmall from '../../../../components/userProfile/UserProfileSmall'
import ChatInfo from '../ChatInfo';

const ChatMainHeader = () => {
    let [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);
  return (
    <div className="flex w-full items-center justify-between gap-y-2 px-6 pb-6 pt-9 min-h-[106px]">
      <UserProfileSmall
        text="Online"
        displayName="Meggle Bande"
        profilePic="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2264&q=80"
      />
      <div
        onClick={openModal}
        className="fa-solid fa-bars-staggered rotate-180 text-[24px] text-lmGrey300 flex h-12 w-12 rounded-full hover:bg-lmGrey50 cursor-pointer items-center justify-center hover:text-lmGrey600 duration-300" />
      <ChatInfo isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}

export default ChatMainHeader