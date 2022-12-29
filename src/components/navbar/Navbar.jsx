import { Dialog } from "@headlessui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigationContext } from "../../context/navigation/navigationContext";
import { useUserContext } from "../../context/user/userContext";
import ModalWrapper from "../wrapper/ModalWrapper";
import NavbarDivider from "./components/NavbarDivider";
import NavbarMenu from "./components/NavbarMenu";
import NavbarMessage from "./components/NavbarMessage";
import NavbarProfile from "./components/NavbarProfile";
import DropdownMode from "./DropdownMode";

const Navbar = () => {
  const { isOpen, dispatchNavigation } = useNavigationContext();
  const navigate = useNavigate();
  const {signedIn, verified} = useUserContext()
  
  const handleClickNavigation = (navigateTo) => {
    closeModal();
    navigate(navigateTo);
  };
  
  const closeModal = () => {
    dispatchNavigation({ type: "CLOSE_NAVIGATION" });
  };

  return (
    <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
      <Dialog.Panel className="hideScrollbar absolute top-20 left-0 bottom-0 w-full overflow-scroll 600:top-7 600:left-7 600:w-fit 600:pb-7">
        <button className="absolute opacity-0" aria-hidden="true"></button>
        <i
          onClick={closeModal}
          className="fa-solid fa-times absolute top-8 right-4 z-[60] flex h-11 w-11 items-center justify-center text-[24px] text-lmGrey600 dark:text-dmGrey100 600:hidden"
        />
        <div className="flex h-fit w-full flex-col items-center gap-y-2 rounded-t-2xl bg-white/80 py-8 shadow-dmShadow backdrop-blur-lg dark:bg-dmGrey900 600:w-[360px] 600:rounded-2xl">
          <div className="flex w-[360px] cursor-pointer items-center gap-x-2 rounded-lg px-8 text-base duration-300">
            <div className="w-[84%] 400:w-[296px]">
              <DropdownMode />
            </div>
          </div>
          <NavbarMenu handleClickNavigation={handleClickNavigation} />
          {signedIn && verified && (
            <>
              <NavbarDivider />
              <NavbarMessage handleClickNavigation={handleClickNavigation} />
              <NavbarDivider />
              <NavbarProfile handleClickNavigation={handleClickNavigation} />
            </>
          )}
        </div>
      </Dialog.Panel>
    </ModalWrapper>
  );
};

export default Navbar;
