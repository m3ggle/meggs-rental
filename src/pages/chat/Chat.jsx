import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import ChatMain from "./view/chatMain/ChatMain";
import ChatSidebar from "./view/chatSidebar/ChatSidebar";

const Chat = () => {
  const windowSize = useWindowSize();
  const navigate = useNavigate();

  useEffect(() => {
    windowSize.width < 1000 && navigate("/chat/sidebar");
  }, [navigate, windowSize]);

    return (
      <div className="relative flex h-full w-full">
        <ChatSidebar />
        <ChatMain />
      </div>
    );
};

export default Chat;
