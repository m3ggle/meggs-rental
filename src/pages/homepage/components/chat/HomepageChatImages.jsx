import React from "react";
import { useNavigate } from "react-router-dom";
import LazyImage from "../../../../components/LazyImage";
import { useDarkModeContext } from "../../../../context/darkMode/darkModeContext";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { homepageImgUrls } from "../../content/homepageImgUrls";

const HomepageChatImages = () => {
  let { darkMode } = useDarkModeContext();
  const navigate = useNavigate();

  const windowWidth = useWindowSize().width;

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
      {/* <img
        aria-hidden={true}
        className="z-10 -ml-[100px] mt-8 hidden h-fit w-[1000px] opacity-0 600:flex 700:mt-0"
        src={desktopChat}
        alt="desktop"
        loading="lazy"
      /> */}
      <LazyImage
        src={darkMode ? desktopChatDM : desktopChat}
        alt="desktop"
        width={
          windowWidth > 1200 ? "922px" : windowWidth > 1000 ? "633px" : "487px"
        }
        height={
          windowWidth > 1200 ? "530px" : windowWidth > 1000 ? "363px" : "280px"
        }
        className="z-10 -ml-[100px] mt-8 hidden h-fit w-[1000px] opacity-0 600:flex 700:mt-0"
        onClick={() => navigate("/chat")}
        ariaHidden={true}
      />

      {/* real images */}
      {/* <img
        onClick={() => navigate("/chat")}
        className="left-0 bottom-0 z-20 ml-6 h-full w-[140px] cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99 600:absolute 600:ml-0 600:h-fit 600:w-[14%]"
        src={darkMode ? mobileChatSidebarDM : mobileChatSidebar}
        alt="mobile"
        loading="lazy"
      /> */}
      {/* <img
        onClick={() => navigate("/chat")}
        className="left-[16%] bottom-0 z-10 h-full min-w-fit cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99 600:absolute 600:-ml-[100px] 600:h-fit 600:w-[69.44%] 600:min-w-0"
        src={darkMode ? desktopChatDM : desktopChat}
        alt="desktop"
        loading="lazy"
      /> */}
      {/* <img
        onClick={() => navigate("/chat")}
        className="right-0 bottom-0 mr-6 h-full w-fit cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99 600:absolute 600:mr-0 600:h-fit 600:w-[41.66%]"
        src={darkMode ? tabletChatDM : tabletChat}
        alt="tablet"
        loading="lazy"
      /> */}

      <LazyImage
        src={darkMode ? mobileChatSidebarDM : mobileChatSidebar}
        alt="mobile"
        width={
          windowWidth > 1200 ? "186px" : windowWidth > 1000 ? "128px" : "138px"
        }
        height={
          windowWidth > 1200 ? "376px" : windowWidth > 1000 ? "258px" : "280px"
        }
        className="left-0 bottom-0 z-20 ml-6 h-full w-[140px] cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99 600:absolute 600:ml-0 600:h-fit 600:w-[14%]"
        onClick={() => navigate("/chat")}
      />
      <LazyImage
        src={darkMode ? desktopChatDM : desktopChat}
        alt="desktop"
        width={
          windowWidth > 1200 ? "922px" : windowWidth > 1000 ? "633px" : "487px"
        }
        height={
          windowWidth > 1200 ? "530px" : windowWidth > 1000 ? "363px" : "280px"
        }
        className="left-[16%] bottom-0 z-10 h-full min-w-fit cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99 600:absolute 600:-ml-[100px] 600:h-fit 600:w-[69.44%] 600:min-w-0"
        onClick={() => navigate("/chat")}
      />
      <LazyImage
        src={darkMode ? tabletChatDM : tabletChat}
        alt="tablet"
        width={
          windowWidth > 1200 ? "553px" : windowWidth > 1000 ? "380px" : "260px"
        }
        height={
          windowWidth > 1200 ? "767px" : windowWidth > 1000 ? "526px" : "280px"
        }
        className="right-0 bottom-0 mr-6 h-full w-fit cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99 600:absolute 600:mr-0 600:h-fit 600:w-[41.66%]"
        onClick={() => navigate("/chat")}
      />
    </div>
  );
};

export default HomepageChatImages;
