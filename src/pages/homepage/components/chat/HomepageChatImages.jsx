import React from "react";
import { useNavigate } from "react-router-dom";
import { useDarkModeContext } from "../../../../context/darkMode/darkModeContext";
import { homepageImgUrls } from "../../content/homepageImgUrls";

const HomepageChatImages = () => {
  let { darkMode } = useDarkModeContext();
  const navigate = useNavigate();

  const {
    mobileChatSidebar,
    mobileChatSidebarDM,
    tabletChat,
    tabletChatDM,
    desktopChat,
    desktopChatDM,
  } = homepageImgUrls();

  return (
    <div className="hideScrollbar relative flex h-[280px] items-end gap-x-10 overflow-scroll 600:h-fit 600:overflow-visible">
      {/* puffer */}
      <img
        aria-hidden={true}
        className="z-10 -ml-[100px] mt-8 hidden h-fit w-[1000px] opacity-0 600:flex 700:mt-0"
        src={desktopChat}
        alt="desktop"
        loading="lazy"
      />

      {/* real images */}
      <img
        onClick={() => navigate("/chat")}
        className="left-0 bottom-0 z-20 ml-6 h-full w-[140px] cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99 600:absolute 600:ml-0 600:h-fit 600:w-[14%]"
        src={darkMode ? mobileChatSidebarDM : mobileChatSidebar}
        alt="mobile"
        loading="lazy"
      />
      <img
        onClick={() => navigate("/chat")}
        className="left-[16%] bottom-0 z-10 h-full min-w-fit cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99 600:absolute 600:-ml-[100px] 600:h-fit 600:w-[69.44%] 600:min-w-0"
        src={darkMode ? desktopChatDM : desktopChat}
        alt="desktop"
        loading="lazy"
      />
      <img
        onClick={() => navigate("/chat")}
        className="right-0 bottom-0 mr-6 h-full w-fit cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99 600:absolute 600:mr-0 600:h-fit 600:w-[41.66%]"
        src={darkMode ? tabletChatDM : tabletChat}
        alt="tablet"
        loading="lazy"
      />
    </div>
  );
};

export default HomepageChatImages;
