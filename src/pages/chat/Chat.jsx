import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import ChatMain from "./view/chatMain/ChatMain";
import ChatSidebar from "./view/chatSidebar/ChatSidebar";

const Chat = () => {
  const windowSize = useWindowSize();
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (windowSize.width < 1000) {
  //     navigate("/chat/sidebar");
  //   } else {
  //     renderDesktopSizeChat();
  //   }
  // }, [windowSize.width, navigate]);

  // const renderDesktopSizeChat = () => {
  //   console.log("gonna render ok")
  //   return (
  //     <div className="relative flex h-full w-full bg-black">
  //       <ChatSidebar />
  //       <ChatMain />
  //     </div>
  //   );
  // };

  useEffect(() => {
    if (windowSize.width < 1000) {
      navigate("/chat/sidebar");
      console.log("should redirect");
    }
  }, [navigate, windowSize]);

  // console.log(windowSize.width < 1000);

    return (
      <div className="relative flex h-full w-full">
        <ChatSidebar />
        <ChatMain />
      </div>
    );
};

export default Chat;
