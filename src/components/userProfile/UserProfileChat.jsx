// <UserProfileChat newMsg={true} lastMsg={"Hey long time no see!"} displayName="Meggle Bande" />
import React from "react";

const UserProfileChat = ({ newMsg, lastMsg, displayName }) => {
    return (
      <div className="flex w-[360px] items-center justify-center rounded-2xl p-6 shadow">
        <div className="flex h-11 w-full gap-x-2">
          {/* pic */}
          <div
            className="h-[46px] min-h-[46px] w-[46px] min-w-[46px] rounded-full bg-black bg-cover bg-center shadow"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80)",
            }}
          ></div>

          {/* info */}
          <div className="flex w-full flex-col justify-center gap-y-[2px]">
            <span className="text-base text-lmGrey500 dark:text-dmGrey100">
              {displayName}
            </span>
            {lastMsg && (
              <span className="text-sm text-lmGrey300 dark:text-dmGrey300">
                {lastMsg}
              </span>
            )}
          </div>

          {newMsg && (
            <div className={`flex h-full w-6 min-w-fit items-center`}>
              <div
                className={`h-3 w-3 rounded-full bg-lmPrimary dark:bg-dmPrimary`}
              ></div>
            </div>
          )}
        </div>
      </div>
    );
};

export default UserProfileChat;
