import React from "react";
import Btn from "../../../components/common/Btn";
import MobileChatSidebar from "../../../assets/img/mobileChatSidebar.webp"
import DesktopChat from "../../../assets/img/desktopChat.webp";
import TableExploreMap from "../../../assets/img/tabletExploreMap.webp";
import { useNavigate } from "react-router-dom";


const HomepageChat = () => {
  const navigate = useNavigate()

  return (
    <div
      id="chat"
      className="relative flex w-full flex-col gap-y-6 bg-white px-14 py-[100px]"
    >
      <div className="flex w-[615px] flex-col gap-y-6">
        <span className="text-5xl font-semibold text-lmGrey800 drop-shadow">
          Chat
        </span>
        <span className="w-full text-2xl text-lmGrey800 drop-shadow-sm">
          If you've discovered the appropriate Offer for you, don't be timid
          about contacting the Owner. Seal the deal and drive away after a
          friendly exchange.
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
              onClick={() => navigate("/chat")}
            />
          </div>
        </div>
      </div>

      <img
        aria-hidden={true}
        className="z-10 -ml-[100px] h-fit w-[1000px] opacity-0"
        src={DesktopChat}
        alt="desktop"
      />

      <img
        onClick={() => navigate("/chat")}
        className="absolute left-14 bottom-[100px] z-20 h-fit w-[14%] cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99"
        src={MobileChatSidebar}
        alt="tablet"
      />
      <img
        onClick={() => navigate("/chat")}
        className="absolute left-[156px] bottom-[100px] z-10 -ml-[100px] h-fit w-[69.44%] cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99"
        src={DesktopChat}
        alt="desktop"
      />
      <img
        onClick={() => navigate("/explore/map")}
        className="absolute right-14 bottom-[100px] h-fit w-[41.66%] cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99"
        src={TableExploreMap}
        alt="desktop"
      />
    </div>
  );
};

export default HomepageChat;
