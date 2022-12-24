import React from "react";
import ModalWrapperTypeBottom from "../wrapper/ModalWrapperTypeBottom";
import Filter from "./Filter";

const FilterModal = ({ isOpen, closeModal, definedActions }) => {
  return (
    <ModalWrapperTypeBottom isOpen={isOpen} closeModal={closeModal}>
      <Filter
        definedActions={definedActions}
        filterModal={true}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </ModalWrapperTypeBottom>
  );
};

export default FilterModal;
