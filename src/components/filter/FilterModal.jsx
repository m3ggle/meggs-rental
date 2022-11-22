import React from "react";
import ModalWrapper from "../wrapper/ModalWrapper";
import Filter from "./Filter";

const FilterModal = ({ isOpen, closeModal }) => {
  return (
    <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
      <Filter filterModal={true} isOpen={isOpen} closeModal={closeModal} />
    </ModalWrapper>
  );
};

export default FilterModal;
