import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import ChatSidebarMain from "./ChatSidebarMain";
import ChatSidebarSearch from "./ChatSidebarSearch";

const ChatSidebar = () => {
  const windowSize = useWindowSize();
  const navigate = useNavigate();

  // debounce to prevent from overdoing
  useEffect(() => {
    windowSize.width > 1000 && navigate("/chat");
  }, [navigate, windowSize]);

  return (
    <div className="flex w-[412px] min-w-[360px] flex-col items-center gap-y-6 px-7 pb-7 pt-9">
      <ChatSidebarSearch />
      <ChatSidebarMain />
    </div>
  );
};

export default ChatSidebar;
