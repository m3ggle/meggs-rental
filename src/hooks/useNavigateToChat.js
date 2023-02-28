import { useNavigate } from "react-router-dom";
import { useWindowSize } from "./useWindowSize";

export const useNavigateToChat = () => {
  const windowSize = useWindowSize();
  const navigate = useNavigate();

  const navigateToChat = ({ chatId = "", offerId = "" }) => {
    if (windowSize.width > 1000)
      navigate(`/chat?chatId=${chatId}&offerId=${offerId}`);
    else navigate(`/chat/mobile?chatId=${chatId}&offerId=${offerId}`);
  };

  return { navigateToChat };
};
