import { Dialog } from "@headlessui/react";
import React from "react";
import ModalWrapper from "./ModalWrapper";

const ModalWrapperTypeBottom = ({ isOpen, closeModal, children }) => {
  return (
    <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
      <Dialog.Panel className="hideScrollbar fixed top-20 bottom-0 z-50 w-full overflow-scroll rounded-t-2xl 820:w-[820px]">
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
    </ModalWrapper>
  );
};

export default ModalWrapperTypeBottom;
