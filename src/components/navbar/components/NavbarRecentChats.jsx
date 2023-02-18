import React from "react";

const NavbarRecentChats = ({ handleClickNavigation }) => {
  return (
    <div className="flex w-[360px] flex-col gap-y-2 py-3 px-8">
      <span className="text-sm font-semibold text-lmGrey400 dark:text-dmGrey100">
        Message
      </span>
      <div className="flex w-full flex-col gap-y-2 rounded-xl bg-white p-3 text-sm text-lmGrey500 dark:bg-dmGrey900 dark:text-dmGrey100 dark:shadow dark:shadow-dmShadow">
        <div
          onClick={() => handleClickNavigation("/chat")}
          className="flex w-full cursor-pointer items-center gap-x-2 rounded-lg bg-white px-4 py-2 duration-300 hover:bg-lmGrey50 dark:bg-dmGrey900 dark:hover:bg-dmGrey800"
        >
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
        <div
          onClick={() => handleClickNavigation("/chat")}
          className="flex w-full cursor-pointer items-center gap-x-2 rounded-lg bg-white px-4 py-2 duration-300 hover:bg-lmGrey50 dark:bg-dmGrey900 dark:hover:bg-dmGrey800"
        >
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
        <div
          onClick={() => handleClickNavigation("/chat")}
          className="flex w-full cursor-pointer items-center gap-x-2 rounded-lg bg-white px-4 py-2 duration-300 hover:bg-lmGrey50 dark:bg-dmGrey900 dark:hover:bg-dmGrey800"
        >
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
        <div
          onClick={() => handleClickNavigation("/chat")}
          className="flex w-full cursor-pointer items-center gap-x-2 rounded-lg bg-white px-4 py-2 duration-300 hover:bg-lmGrey50 dark:bg-dmGrey900 dark:hover:bg-dmGrey800"
        >
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
  );
};

export default NavbarRecentChats;
