import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../../../components/common/Btn";
import { useNotifyModalContext } from "../../../../context/notifyModal/notifyModalContext";
import { useUserContext } from "../../../../context/user/userContext";

const HomepageChatText = () => {
  const navigate = useNavigate();

  const { userId } = useUserContext();
  const { openAuthNotifyModal } = useNotifyModalContext();

  const handleNavigateChat = () => {
    if (userId === null) {
      openAuthNotifyModal();
      return;
    }

    navigate("/chat")
  };

  return (
    <div className="flex w-full flex-col gap-y-3 px-6 700:w-[615px] 700:px-0 1200:gap-y-6">
      <span className="text-4xl font-semibold -tracking-[1.2%] text-lmGrey800 drop-shadow dark:text-dmGrey25 700:text-[40px] 700:leading-[40px] 1200:text-5xl">
        Chat
      </span>
      <span className="w-full text-lg text-lmGrey800 drop-shadow-sm dark:text-dmGrey25 700:text-xl 1200:text-2xl">
        If you've discovered the appropriate Offer for you, don't be timid about
        contacting the Owner. Seal the deal and drive away after a friendly
        exchange.
      </span>
      <div className="flex w-full gap-x-3">
        <div className="h-fit">
          <Btn
            title="Find Offer"
            uiType="secondary"
            type="button"
            onClick={() => navigate("/explore/catalog")}
          />
        </div>
        <div className="h-fit">
          <Btn
            title="View your Chats"
            uiType="primary"
            type="button"
            icon="fa-solid fa-chevron-right"
            onClick={handleNavigateChat}
          />
        </div>
      </div>
    </div>
  );
};

export default HomepageChatText;
