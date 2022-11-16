import React from "react";
import UserProfileChat from "../../../../components/userProfile/UserProfileChat";

const ChatSidebarMain = () => {
  const testDrive = [1, 2, 3, 4, 5, ];
  return (
    <div className="flex flex-col gap-y-2 w-full">
      {testDrive.map((item) => (
        <UserProfileChat
          newMsg={true}
          lastMsg={"Hey long time no see!"}
          displayName="Meggle Bande"
        />
      ))}
    </div>
  );
};

export default ChatSidebarMain;
