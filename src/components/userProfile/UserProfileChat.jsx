// <UserProfileChat newMsg={true} lastMsg={"Hey long time no see!"} displayName="Meggle Bande" />
import React from "react";

const UserProfileChat = ({
  chatId,
  chatStatus,
  lastMsg,
  displayName,
  shadow,
  profilePicture,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(chatId)}
      className={`flex w-full items-center justify-center rounded-lg px-2 py-4 ${
        shadow && "shadow"
      } cursor-pointer duration-300 hover:bg-lmGrey50 dark:hover:bg-dmGrey800`}
    >
      <div className="flex h-11 w-full gap-x-2">
        {/* pic */}
        <img
          className="h-[46px] min-h-[46px] w-[46px] min-w-[46px] rounded-full bg-lmGrey100 object-cover object-center shadow"
          src={profilePicture}
          alt="user avatar"
        />
        {/* <div
          className="h-[46px] min-h-[46px] w-[46px] min-w-[46px] rounded-full bg-lmGrey100 bg-cover bg-center shadow"
          style={{
            backgroundImage: `url(${photoURL})`,
          }}
        ></div> */}

        {/* info */}
        <div className="flex w-full flex-col justify-center gap-y-[2px] overflow-hidden">
          <span className="text-base text-lmGrey500 dark:text-dmGrey100">
            {displayName}
          </span>
          {lastMsg && (
            <span className="w-full truncate text-sm text-lmGrey300 dark:text-dmGrey300">
              {lastMsg}
            </span>
          )}
        </div>

        <div className={`flex h-full w-6 min-w-fit items-center`}>
          {chatStatus && (
            <div
              className={`h-2 w-2 rounded-full bg-lmPrimary dark:bg-dmPrimary`}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfileChat;
