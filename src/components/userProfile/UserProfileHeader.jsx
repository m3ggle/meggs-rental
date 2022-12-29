import React, { useState } from "react";
import { getAge } from "../../helper/getAge";
import UserProfileDetails from "../../pages/userProfile/UserProfileDetails";

const UserProfileHeader = ({ userProfileData = {} }) => {
  const { firstName, lastName, birthday, email, photoURL } = userProfileData;

  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  
  return (
    <div
      onClick={openModal}
      className="flex w-full cursor-pointer flex-col items-center gap-y-2"
    >
      <img
        className="h-[84px] w-[84px] rounded-full bg-cover bg-center shadow"
        src={photoURL}
        alt="user"
      />
      <div className="flex w-full flex-col items-center gap-y-[2px] text-sm text-lmGrey600 dark:text-dmGrey100">
        <div className="flex w-full items-center justify-center gap-x-[2px]">
          <span className="w-full truncate text-right text-lg text-lmGrey800 dark:text-dmGrey25">
            {firstName} {lastName}
          </span>
          <div className="text-lg">•</div>
          <span className="w-full truncate text-left text-sm">
            {getAge(birthday)} years old
          </span>
        </div>
        <span>{email}</span>
      </div>
      <UserProfileDetails isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default UserProfileHeader;
