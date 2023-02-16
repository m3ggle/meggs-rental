import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../components/Loading";
import { useUserContext } from "../../../../context/user/userContext";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { useGetChatPreviews } from "../../hooks/useGetChatPreviews";
import ChatSidebarMain from "./ChatSidebarMain";
// import ChatSidebarSearch from "./ChatSidebarSearch";

const ChatSidebar = () => {
  const windowSize = useWindowSize();
  const navigate = useNavigate();

  const { userId } = useUserContext();

  const { chatPreviews, isLoading } = useGetChatPreviews({ userId });

  // debounce to prevent from overdoing
  useEffect(() => {
    windowSize.width > 1000 && navigate("/chat");
  }, [navigate, windowSize]);

  return (
    <div className="flex h-screen w-[412px] min-w-[360px] flex-col items-center gap-y-6 px-7 pb-7 pt-9">
      {/* <ChatSidebarSearch /> */}
      
      {isLoading ? (
        <Loading />
      ) : 
        chatPreviews.length !== 0 && (
        <ChatSidebarMain chatPreviews={chatPreviews} />
      )}
    </div>
  );
};

export default ChatSidebar;
