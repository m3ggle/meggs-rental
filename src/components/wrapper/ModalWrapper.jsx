import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

const ModalWrapper = ({ isOpen, closeModal, children }) => {
  const testDrive = () => {
    console.log("test")
    closeModal()
  }
  
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="z-50" onClose={closeModal}>
        {/* backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* not for closing the modal, only animation */}
          <Dialog.Backdrop className="fixed inset-0 z-40 bg-black bg-opacity-25" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div
            onClick={testDrive}
            // onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto"
          >
            {children}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ModalWrapper;
