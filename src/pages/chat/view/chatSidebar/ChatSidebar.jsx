import React from "react";
import ChatSidebarMain from "./ChatSidebarMain";
import ChatSidebarSearch from "./ChatSidebarSearch";

const ChatSidebar = () => {
  return (
    <div className="flex flex-col items-center gap-y-6 px-7 pb-7 pt-9 min-w-[360px] w-[412px]">
      <ChatSidebarSearch />
      <ChatSidebarMain />
    </div>
  );
};

export default ChatSidebar;
