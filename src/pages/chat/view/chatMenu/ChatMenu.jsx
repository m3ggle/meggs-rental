import React from "react";
import { useRecentChatsContext } from "../../../../context/recentChats/recentChatsContext";
import ChatPreviewList from "./ChatPreviewList";

const ChatMenu = () => {
  const { recentChats } = useRecentChatsContext();

  return (
    <div className="flex h-screen w-[412px] min-w-[360px] flex-col items-center gap-y-6 px-7 pb-7 pt-9">
      {/* <ChatSidebarSearch /> */}

      <div className="flex w-full flex-col gap-y-2">
        <span className="w-full text-sm text-lmGrey600 dark:text-dmGrey600">
          Recent Chats
        </span>
        {recentChats.length !== 0 && (
          <ChatPreviewList chatPreviews={recentChats} />
        )}
      </div>
    </div>
  );
};

export default ChatMenu;
