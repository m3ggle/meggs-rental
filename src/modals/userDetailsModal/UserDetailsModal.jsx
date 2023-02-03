import React from "react";

import ModalWrapperTypeBottom from "../../components/wrapper/ModalWrapperTypeBottom";
import { useUserDetailsModalContext } from "../../context/userDetailsModal/userDetailsModalContext";
import UserDetails from "./UserDetails";

const UserDetailsModal = () => {
  const { isOpen, userId, closeUserDetailsModal } =
    useUserDetailsModalContext();

  return (
    <ModalWrapperTypeBottom isOpen={isOpen} closeModal={closeUserDetailsModal}>
      {isOpen && userId !== null && (
        <UserDetails userId={userId} closeModal={closeUserDetailsModal} />
      )}
    </ModalWrapperTypeBottom>
  );
};

export default UserDetailsModal;
