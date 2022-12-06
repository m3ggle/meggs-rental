import React from 'react'
import UserProfileSmall from '../../userProfile/UserProfileSmall';

const NavbarProfile = ({ handleClickNavigation }) => {
  return (
    <div className="flex w-[360px] items-center px-8 py-2">
      <div
        onClick={() => handleClickNavigation("/profile")}
        className="w-full cursor-pointer rounded-lg px-4 py-3 duration-300 hover:bg-white dark:hover:bg-dmGrey800"
      >
        <UserProfileSmall
          text="Click to view the owners account"
          displayName="Meggle Bande"
          profilePic="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2264&q=80"
        />
      </div>
    </div>
  );
};

export default NavbarProfile