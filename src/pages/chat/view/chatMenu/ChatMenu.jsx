import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecentChatsContext } from "../../../../context/recentChats/recentChatsContext";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import ChatPreviewList from "./ChatPreviewList";
// import ChatSidebarSearch from "./ChatSidebarSearch";

const ChatMenu = () => {
  const windowSize = useWindowSize();
  const navigate = useNavigate();

  const { recentChats } = useRecentChatsContext();

  // debounce to prevent from overdoing
  useEffect(() => {
    windowSize.width > 1000 && navigate("/chat");
  }, [navigate, windowSize]);

  return (
    <div className="flex h-screen w-[412px] min-w-[360px] flex-col items-center gap-y-6 px-7 pb-7 pt-9">
      {/* <ChatSidebarSearch /> */}

      {recentChats.length !== 0 && (
        <ChatPreviewList chatPreviews={recentChats} />
      )}
    </div>
  );
};

export default ChatMenu;
