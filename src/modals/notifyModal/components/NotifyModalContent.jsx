import React from "react";
import { useNotifyModalContext } from "../../../context/notifyModal/notifyModalContext";
import ContentNavigate from "./ContentNavigate";
import ContentStandard from "./ContentStandard";

const NotifyModalContent = () => {
  const { preMade } = useNotifyModalContext();

  const decision = {
    signIn: "",
    navigate: <ContentNavigate />,
    customized: "",
    standard: <ContentStandard />,
  };

  return decision[preMade];
};

export default NotifyModalContent;
