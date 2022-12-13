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
      className="relative flex w-full flex-col gap-y-6 bg-white py-16 700:py-[100px] 700:px-11 1200:px-14"
    >
      <div className="flex w-full 700:px-0 flex-col gap-y-6 px-6 700:w-[615px]">
        <span className="text-4xl font-semibold -tracking-[1.2%] text-lmGrey800 drop-shadow 700:text-[40px] 700:leading-[40px] 1200:text-5xl">
          Chat
        </span>
        <span className="w-full text-lg text-lmGrey800 drop-shadow-sm 700:text-xl 1200:text-2xl">
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

      <div className="hideScrollbar relative flex h-[280px] items-end gap-x-10 overflow-scroll 600:h-fit 600:overflow-visible">
        {/* puffer */}
        <img
          aria-hidden={true}
          className="z-10 -ml-[100px] mt-8 hidden h-fit w-[1000px] opacity-0 600:flex 700:mt-0"
          src={DesktopChat}
          alt="desktop"
        />

        {/* real images */}
        <img
          onClick={() => navigate("/chat")}
          className="left-0 bottom-0 ml-6 600:ml-0 z-20 h-full w-[140px] cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99 600:absolute 600:h-fit 600:w-[14%]"
          src={MobileChatSidebar}
          alt="mobile"
        />
          <img
            onClick={() => navigate("/chat")}
            className="left-[16%] bottom-0 z-10 h-full min-w-fit 600:min-w-0 cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99 600:absolute 600:-ml-[100px] 600:h-fit 600:w-[69.44%]"
            src={DesktopChat}
            alt="desktop"
          />
        <img
          onClick={() => navigate("/explore/map")}
          className="right-0 mr-6 600:mr-0 bottom-0 h-full w-fit cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99 600:absolute 600:h-fit 600:w-[41.66%]"
          src={TableExploreMap}
          alt="tablet"
        />
      </div>
    </div>
  );
};

export default HomepageChat;
