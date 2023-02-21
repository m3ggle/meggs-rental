import React from "react";
import { useRecentChatsContext } from "../../../context/recentChats/recentChatsContext";
import ChatPreviewList from "../../../pages/chat/view/chatMenu/ChatPreviewList";

const NavbarRecentChats = ({ handleClickNavigation }) => {
  const { recentChats } = useRecentChatsContext();
  const chatPreviews = recentChats.slice(0, 4);

  return (
    <div className="flex w-[360px] flex-col gap-y-2 py-3 px-8">
      <span className="text-sm font-semibold text-lmGrey400 dark:text-dmGrey100">
        Message
      </span>
      <div className="flex w-full flex-col gap-y-2 rounded-xl bg-white p-3 text-sm text-lmGrey500 dark:bg-dmGrey900 dark:text-dmGrey100 dark:shadow dark:shadow-dmShadow">
        {chatPreviews.length !== 0 && (
          <ChatPreviewList chatPreviews={chatPreviews} />
        )}
      </div>
    </div>
  );
};

export default NavbarRecentChats;
