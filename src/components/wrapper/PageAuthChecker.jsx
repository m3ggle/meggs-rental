import React, { useEffect } from "react";
import { useNotifyModalContext } from "../../context/notifyModal/notifyModalContext";
import { useUserContext } from "../../context/user/userContext";

const PageAuthChecker = ({ children }) => {
  const { signedIn, verified } = useUserContext();
  const { openAuthNotifyModal } = useNotifyModalContext();

  useEffect(() => {
    openAuthNotifyModal();
  }, [openAuthNotifyModal]);

  if (!signedIn || !verified) {
    return <></>;
  }

  return <>{children}</>;
};

export default PageAuthChecker;
