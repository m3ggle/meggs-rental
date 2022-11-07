/**
Explore Map
Explore Catalog
Favorites
Own Offers
Upload
Profile
sign out

Msg

Profile Card
 */

import React from "react";
import UserProfileSmall from "./userProfile/UserProfileSmall";

const Navbar = () => {
  return (
    <div className="absolute top-7 left-7 flex h-fit w-[360px] flex-col gap-y-2 rounded-2xl bg-white/80 py-8 backdrop-blur-lg dark:bg-dmGrey900/80">
      {/* menu */}
      <div className="flex flex-col gap-y-2 px-8 py-3 text-lmGrey400 dark:text-dmGrey100">
        <span className="text-sm font-semibold">Menu</span>
        <div className="flex cursor-pointer items-center gap-x-2 rounded-lg text-base duration-300 hover:bg-white dark:hover:bg-dmGrey800">
          <div className="fa-solid fa-map flex h-11 w-11 items-center justify-center text-[18px]"></div>
          <span>Explore Map</span>
        </div>
        <div className="flex cursor-pointer items-center gap-x-2 rounded-lg text-base duration-300 hover:bg-white dark:hover:bg-dmGrey800">
          <div className="fa-solid fa-list flex h-11 w-11 items-center justify-center text-[18px]"></div>
          <span>Explore Catalog</span>
        </div>
        <div className="flex cursor-pointer items-center gap-x-2 rounded-lg text-base duration-300 hover:bg-white dark:hover:bg-dmGrey800">
          <div className="fa-solid fa-heart flex h-11 w-11 items-center justify-center text-[18px]"></div>
          <span>Favorites</span>
        </div>
        <div className="flex cursor-pointer items-center gap-x-2 rounded-lg text-base duration-300 hover:bg-white dark:hover:bg-dmGrey800">
          <div className="fa-solid fa-file flex h-11 w-11 items-center justify-center text-[18px]"></div>
          <span>Your Offers</span>
        </div>
        <div className="flex cursor-pointer items-center gap-x-2 rounded-lg text-base duration-300 hover:bg-white dark:hover:bg-dmGrey800">
          <div className="fa-solid fa-plus flex h-11 w-11 items-center justify-center text-[18px]"></div>
          <span>Upload</span>
        </div>
        <div className="flex cursor-pointer items-center gap-x-2 rounded-lg text-base duration-300 hover:bg-white dark:hover:bg-dmGrey800">
          <div className="fa-solid fa-user flex h-11 w-11 items-center justify-center text-[18px]"></div>
          <span>Your Profile</span>
        </div>
        <div className="flex cursor-pointer items-center gap-x-2 rounded-lg text-base duration-300 hover:bg-white dark:hover:bg-dmGrey800">
          <div className="fa-solid fa-right-from-bracket flex h-11 w-11 rotate-180 items-center justify-center text-[18px]"></div>
          <span>Sign Out</span>
        </div>
      </div>
      {/* divider */}
      <div className="flex w-full px-10 py-2 ">
        <div className="h-[1px] w-full rounded-full bg-lmGrey300 dark:bg-dmGrey600"></div>
      </div>
      {/* msg */}
      <div className="flex flex-col gap-y-2 py-3 px-8">
        <span className="text-sm font-semibold text-lmGrey400 dark:text-dmGrey100">
          Message
        </span>
        <div className="flex w-full flex-col gap-y-2 rounded-xl bg-white p-3 text-sm text-lmGrey500 dark:bg-dmGrey900 dark:text-dmGrey100">
          <div className="flex w-full cursor-pointer items-center gap-x-2 rounded-lg bg-white px-4 py-2 duration-300 hover:bg-lmGrey50 dark:bg-dmGrey900 dark:hover:bg-dmGrey800">
            <div
              className="h-11 w-11 min-w-[44px] rounded-full bg-lmPrimary bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80)",
              }}
            />
            <span className="w-full">Gustavo Bravo</span>
            <div className="min-w-6 flex h-6 items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-lmPrimary"></div>
            </div>
          </div>
          <div className="flex w-full cursor-pointer items-center gap-x-2 rounded-lg bg-white px-4 py-2 duration-300 hover:bg-lmGrey50 dark:bg-dmGrey900 dark:hover:bg-dmGrey800">
            <div
              className="h-11 w-11 min-w-[44px] rounded-full bg-lmPrimary bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
              }}
            />
            <span className="w-full">Alina Mertens</span>
            <div className="min-w-6 flex h-6 items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-lmPrimary"></div>
            </div>
          </div>
          <div className="flex w-full cursor-pointer items-center gap-x-2 rounded-lg bg-white px-4 py-2 duration-300 hover:bg-lmGrey50 dark:bg-dmGrey900 dark:hover:bg-dmGrey800">
            <div
              className="h-11 w-11 min-w-[44px] rounded-full bg-lmPrimary bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2264&q=80)",
              }}
            />
            <span className="w-full">Nele Langrock</span>
            <div className="min-w-6 flex h-6 items-center justify-center">
              {/* <div className="h-2 w-2 rounded-full bg-lmPrimary"></div> */}
            </div>
          </div>
          <div className="flex w-full cursor-pointer items-center gap-x-2 rounded-lg bg-white px-4 py-2 duration-300 hover:bg-lmGrey50 dark:bg-dmGrey900 dark:hover:bg-dmGrey800">
            <div
              className="h-11 w-11 min-w-[44px] rounded-full bg-lmPrimary bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2261&q=80)",
              }}
            />
            <span className="w-full">Olivia Kahn</span>
            <div className="min-w-6 flex h-6 items-center justify-center">
              {/* <div className="h-2 w-2 rounded-full bg-lmPrimary"></div> */}
            </div>
          </div>
        </div>
      </div>
      {/* divider */}
      <div className="flex w-full px-10">
        <div className="h-[1px] w-full rounded-full bg-lmGrey300 dark:bg-dmGrey600"></div>
      </div>
      {/* profile */}
      <div className="flex items-center px-8 py-2">
        <div className="w-full rounded-lg px-4 py-3 hover:bg-white dark:hover:bg-dmGrey800 duration-300 cursor-pointer">
          <UserProfileSmall
            text="Click to view the owners account"
            displayName="Meggle Bande"
            profilePic="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2264&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
