import React from "react";
import { useNotifyModalContext } from "../../context/notifyModal/notifyModalContext";
import NavbarWrapper from "../wrapper/ModalWrapper";
import NotifyModalContent from "./components/NotifyModalContent";

const NotifyModal = () => {
  const { isOpen, closeNotifyModal } = useNotifyModalContext();

  console.log(isOpen);

  return (
    <NavbarWrapper isOpen={isOpen} closeModal={closeNotifyModal}>
      <NotifyModalContent />
    </NavbarWrapper>
  );
};

export default NotifyModal;
