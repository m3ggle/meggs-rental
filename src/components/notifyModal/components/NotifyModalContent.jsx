import React from "react";
import { useNotifyModalContext } from "../../../context/notifyModal/notifyModalContext";
import ContentStandard from "./ContentStandard";

const NotifyModalContent = () => {
  const { preMade } = useNotifyModalContext();

  const decision = {
    signIn: "",
    authChecker: "",
    customized: "",
    standard: <ContentStandard />,
  };

  return decision[preMade];
};

export default NotifyModalContent;
