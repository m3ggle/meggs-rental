import React, { useEffect } from "react";
import { useNotifyModalContext } from "../../context/notifyModal/notifyModalContext";
import { useUserContext } from "../../context/user/userContext";

const PageAuthChecker = ({ children }) => {
  const { userId } = useUserContext();
  const { isOpen, openAuthNotifyModal, closeNotifyModal } = useNotifyModalContext();

  useEffect(() => {
    if (!userId) {
      openAuthNotifyModal();
      return;
    }
    if (isOpen && userId) {
      closeNotifyModal();
      return;
    }
  }, [openAuthNotifyModal, userId, closeNotifyModal, isOpen]);
    
  if (!userId) {
    return <></>;
  }

  return <>{children}</>;
};

export default PageAuthChecker;
