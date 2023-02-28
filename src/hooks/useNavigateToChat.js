import { useNavigate } from "react-router-dom";
import { useWindowSize } from "./useWindowSize";

export const useNavigateToChat = () => {
  const windowSize = useWindowSize();
  const navigate = useNavigate();

  const navigateToChat = ({ chatroomId = "", offerId = "" }) => {
    if (windowSize.width > 1000)
      navigate(`/chat?chatId=${chatroomId}&offerId=${offerId}`);
    else navigate(`/chat/mobile?chatId=${chatroomId}&offerId=${offerId}`);
  };

  return { navigateToChat };
};
