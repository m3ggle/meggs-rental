import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import PageAuthChecker from "../../components/wrapper/PageAuthChecker";
import { useUrlManipulation } from "../../hooks/urlManipulation/useUrlManipulation";
import { useWindowSize } from "../../hooks/useWindowSize";
import Chat from "./view/chat/Chat";
import ChatMenu from "./view/chatMenu/ChatMenu";

const ChatContainer = () => {
  const windowSize = useWindowSize();
  // const navigate = useNavigate();
  const { getSingleParam } = useUrlManipulation();

  const chatId = getSingleParam("chatId");

  // debounce to prevent from overdoing
  // useEffect(() => {
  //   windowSize.width < 1000 && navigate("/chat/menu");
  // }, [navigate, windowSize]);

  return (
    <PageAuthChecker>
      <div className="relative flex h-full w-full">
        <ChatMenu />
        <div
          style={{ height: `${windowSize.height}px` }}
          className="flex min-w-[360px] max-w-[720px] flex-col gap-y-2 1000:w-full 1000:min-w-0 1000:max-w-none"
        >
          {chatId === null ? (
            <div className="flex h-screen w-full items-center justify-center">
              <span className="text-xs text-lmGrey800 dark:text-dmGrey100">
                No chat has been selected
              </span>
            </div>
          ) : (
            <Chat />
          )}
        </div>
      </div>
    </PageAuthChecker>
  );
};

export default ChatContainer;
