import React from 'react'
import Btn from '../../../components/common/Btn';
import MobileChatSidebar from "../../../assets/img/mobileChatSidebar.webp"
import DesktopChat from "../../../assets/img/desktopChat.webp"
import TableExploreMap from "../../../assets/img/tabletExploreMap.webp"



const HomepageChat = () => {
  return (
    <div className="flex w-full flex-col gap-y-6 bg-white px-14 py-[100px]">
      <div className="flex w-[615px] flex-col gap-y-6">
        <span className="text-5xl font-semibold text-lmGrey800">Chat</span>
        <span className="w-full text-2xl text-lmGrey800">
          If you've discovered the appropriate Offer for you, don't be timid
          about contacting the Owner. Seal the deal and drive away after a
          friendly exchange.
        </span>
        <div className="flex w-full gap-x-3">
          <div className="h-fit">
            <Btn title="Find Offer" uiType="secondary" type="button" />
          </div>
          <div className="h-fit">
            <Btn
              title="View your Chats"
              uiType="primary"
              type="button"
              icon="fa-solid fa-chevron-right"
            />
          </div>
        </div>
      </div>
      <div className="relative flex h-[571px] w-full max-w-full items-baseline bg-pink-100 px-1 overflow">
        <div className="absolute left-0 bottom-0 z-20 min-h-[404px] min-w-[200px] bg-blue-200"></div>
        <div className="absolute left-[100px] bottom-0 z-10 min-h-[574.4px] min-w-[1000px] bg-blue-300"></div>
        <div className="absolute right-0 bottom-0 min-h-[831.84px] min-w-[600px] bg-blue-400"></div>
      </div>
      {/* <div className="relative flex h-[571px] bg-pink-100 items-baseline w-full max-w-full">
        <img className="h-fit w-[200px] z-20" src={MobileChatSidebar} alt="tablet" />
        <img className="-ml-[100px] h-fit w-[1000px] z-10" src={DesktopChat} alt="desktop" />
        <img className="h-fit w-[600px]" src={TableExploreMap} alt="desktop" />
      </div> */}
    </div>
  );
}

export default HomepageChat