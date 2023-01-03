import { Dialog } from "@headlessui/react";
import React from "react";
import ModalWrapper from "../../components/wrapper/ModalWrapper";
import { useNotifyModalContext } from "../../context/notifyModal/notifyModalContext";
import { useWindowSize } from "../../hooks/useWindowSize";
import NotifyModalContent from "./components/NotifyModalContent";

const NotifyModal = () => {
  const { isOpen, photoURL, closeNotifyModal } = useNotifyModalContext();

  const windowSize = useWindowSize();

  return (
    <ModalWrapper isOpen={isOpen} closeModal={closeNotifyModal}>
      <Dialog.Panel className="absolute bottom-0 top-20 flex w-full flex-col-reverse overflow-hidden rounded-t-2xl bg-white shadow-2xl dark:bg-dmGrey900 600:static 600:h-[700px] 600:w-[572px] 600:rounded-2xl 1000:h-[500px] 1000:w-[900px] 1000:flex-row">
        <div className="absolute top-[180px] flex w-full flex-col items-start gap-y-2 overflow-scroll px-6 pt-5 600:static 600:h-[440px] 600:py-10 600:px-11 1000:h-[500px] 1000:w-[450px] 1000:items-center 1000:p-11">
          {/* better, but overflow cuts buttons hover effect */}
          {/* <div className="absolute top-[180px] flex w-full flex-col items-start gap-y-2 px-6 pt-5 600:static 600:h-[440px] 600:py-10 600:px-11 1000:h-[500px] 1000:w-[450px] 1000:items-center 1000:p-11"> */}
          <NotifyModalContent />
        </div>
        <div className="absolute top-0 w-full 600:relative 600:min-h-[260px] 600:w-[572px] 1000:h-[500px] 1000:w-[450px]">
          {/* gradient */}
          <div className="absolute -bottom-[1px] flex h-[36%] w-full bg-gradient-to-t from-white dark:from-dmGrey900 1000:hidden"></div>
          <button
            onClick={closeNotifyModal}
            className="absolute right-6 top-8 flex items-center justify-center rounded-full bg-white p-3 shadow-md dark:bg-dmGrey900 600:right-12 600:top-12"
          >
            <div className="h-6 max-h-[24px] w-6 max-w-[24px]">
              <i className="fa-solid fa-times text-[24px] text-lmGrey800 drop-shadow dark:text-dmGrey25 " />
            </div>
          </button>
          {photoURL !== null && (
            <img
              className="h-[180px] w-full object-cover 600:h-[260px] 600:w-[572px] 1000:h-[500px] 1000:w-[450px]"
              src={
                windowSize.width > 1000
                  ? photoURL.desktop ??
                    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FthreeCars.webp?alt=media&token=51d51fb2-414d-44a4-a549-40a36666b7cb"
                  : photoURL.mobile ??
                    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2Fmoped.webp?alt=media&token=c3fbae96-06a8-4121-9067-25ca1dcea4af"
              }
              alt="space filler"
            />
          )}
        </div>
      </Dialog.Panel>
    </ModalWrapper>
  );
};

export default NotifyModal;
