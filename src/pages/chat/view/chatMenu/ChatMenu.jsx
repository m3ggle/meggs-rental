import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetChatPreviews } from "../../../../api/supabase/useGetChatPreviews";
import Loading from "../../../../components/Loading";
import { useUserContext } from "../../../../context/user/userContext";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import ChatPreviewList from "./ChatPreviewList";
// import ChatSidebarSearch from "./ChatSidebarSearch";

const ChatMenu = () => {
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
        <div className="flex h-20 w-full items-center justify-center">
          <Loading />
        </div>
      ) : (
        chatPreviews.length !== 0 && (
          <ChatPreviewList chatPreviews={chatPreviews} />
        )
      )}
    </div>
  );
};

export default ChatMenu;
