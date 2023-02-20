import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../../../components/common/Btn";
import { useRecentChatsContext } from "../../../../context/recentChats/recentChatsContext";
import { useUserContext } from "../../../../context/user/userContext";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import ChatPreviewList from "./ChatPreviewList";
// import ChatSidebarSearch from "./ChatSidebarSearch";

const ChatMenu = () => {
  const { userId } = useUserContext();
  const windowSize = useWindowSize();
  const navigate = useNavigate();

  // const { chatPreviews, isLoading } = useGetChatPreviews({ userId });

  const { recentChats } = useRecentChatsContext();

  // debounce to prevent from overdoing
  useEffect(() => {
    windowSize.width > 1000 && navigate("/chat");
  }, [navigate, windowSize]);

  // useEffect(() => {
  //   console.log("state hat sich geändert", recentChats);
  // }, [recentChats]);

  console.log("rerender");

  const handleClick = () => {
    console.log(recentChats);
  }

  return (
    <div className="flex h-screen w-[412px] min-w-[360px] flex-col items-center gap-y-6 px-7 pb-7 pt-9">
      {/* <ChatSidebarSearch /> */}

      {recentChats.length !== 0 && (
        <ChatPreviewList chatPreviews={recentChats} />
      )}
      <Btn
        title="click me"
        onClick={handleClick}
        type="button"
        uiType="primary"
      />

      {/* {isLoading ? (
        <div className="flex h-20 w-full items-center justify-center">
          <Loading />
        </div>
      ) : (
        chatPreviews.length !== 0 && (
          <ChatPreviewList chatPreviews={chatPreviews} />
        )
      )} */}
    </div>
  );
};

export default ChatMenu;
