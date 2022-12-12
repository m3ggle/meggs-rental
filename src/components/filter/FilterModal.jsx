import React from "react";
import ModalWrapper from "../wrapper/ModalWrapper";
import Filter from "./Filter";

const FilterModal = ({ isOpen, closeModal, definedActions }) => {
  return (
    <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
      <Filter
        definedActions={definedActions}
        filterModal={true}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </ModalWrapper>
  );
};

export default FilterModal;
