import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useNotifyModalContext } from "../../../context/notifyModal/notifyModalContext";

const NotifyModalWrapper = ({children}) => {
const { isOpen, closeNotifyModal } = useNotifyModalContext();

  return (
    // <div className='w-full h-screen absolute inset-0 bg-black z-50'>NotifyModalWrapper</div>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="z-50" onClose={closeNotifyModal}>
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
          <div
            onClick={closeNotifyModal}
            className="fixed inset-0 z-40 bg-black bg-opacity-25"
          />
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
          <div className="fixed inset-0 z-50 overflow-y-auto">{children}</div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default NotifyModalWrapper;
