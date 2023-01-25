import React, { useEffect } from "react";
import { useNotifyModalContext } from "../../context/notifyModal/notifyModalContext";
import { useUserContext } from "../../context/user/userContext";

const PageAuthChecker = ({ children }) => {
  const { userId } = useUserContext();
  const { openAuthNotifyModal } = useNotifyModalContext();

  useEffect(() => {
    if (!userId) {
      openAuthNotifyModal();
    }
  }, [openAuthNotifyModal, userId]);

  if (!userId) {
    return <></>;
  }

  console.log("gets rendered")
  return <>{children}</>;
};

export default PageAuthChecker;
