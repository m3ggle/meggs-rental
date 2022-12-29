import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageAuthChecker from "../../components/wrapper/PageAuthChecker";
import { useWindowSize } from "../../hooks/useWindowSize";
import ChatMain from "./view/chatMain/ChatMain";
import ChatSidebar from "./view/chatSidebar/ChatSidebar";

const Chat = () => {
  const windowSize = useWindowSize();
  const navigate = useNavigate();

  // debounce to prevent from overdoing
  useEffect(() => {
    windowSize.width < 1000 && navigate("/chat/sidebar");
  }, [navigate, windowSize]);

  return (
    <PageAuthChecker>
      <div className="relative flex h-full w-full">
        <ChatSidebar />
        <ChatMain />
      </div>
    </PageAuthChecker>
  );
};

export default Chat;
