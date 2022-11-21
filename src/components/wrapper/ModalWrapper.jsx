import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

const ModalWrapper = ({ isOpen, closeModal, children }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 flex items-start justify-center"
        onClose={closeModal}
      >
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
          <Dialog.Backdrop className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        {/* main */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="fixed top-20 bottom-0 w-full overflow-scroll rounded-t-2xl 820:w-[820px] ">
            {/* Todo: when scrolling then top-10 or so and when the user is at top then top-20 */}
            <div className="relative flex h-fit min-h-full w-full max-w-[820px] flex-col items-center rounded-t-2xl bg-white p-6 shadow dark:bg-dmGrey900 600:pt-12">
              <button
                autoFocus={true}
                className="pointer-events-none absolute opacity-0"
              ></button>
              <button
                onClick={closeModal}
                className="fa-solid fa-times absolute top-6 right-6 cursor-pointer text-[24px] text-lmGrey700 dark:text-dmGrey25 600:top-10 600:right-12"
              />
              {children}
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ModalWrapper;
