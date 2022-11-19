import React from "react";
import ModalWrapper from "../../../../layouts/ModalWrapper";
import Filter from "./Filter";

const FilterModal = ({
  isOpen,
  closeModal,
  setOutsideSearch,
  handleDeleteInput,
}) => {
  return (
    <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
      <Filter
        filterModal={true}
        isOpen={isOpen}
        closeModal={closeModal}
        setOutsideSearch={setOutsideSearch}
        handleDeleteInput={handleDeleteInput}
      />
    </ModalWrapper>
  );
};

export default FilterModal;
