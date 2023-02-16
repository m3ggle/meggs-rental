import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/user/userContext";
import { useUserDetailsModalContext } from "../../../context/userDetailsModal/userDetailsModalContext";
import { auth } from "../../../firebase.config";
import styles from "../../../style";

const ProfileButton = ({ information }) => {
  const { btnTitle = "", icon = "", link = "", secondIcon = "" } = information;

  const { openUserDetailsModal } = useUserDetailsModalContext();
  const { userId } = useUserContext();

  const navigate = useNavigate();

  const handleUserModal = () => {
    openUserDetailsModal(userId);
  };
  const handleSignOutModal = () => {
    // currently no modal, but it is coming in the future
    auth.signOut();
    navigate("/sign-in");
  };

  const modalHandlers = {
    userModal: () => handleUserModal(),
    signOutModal: () => handleSignOutModal(),
  };

  const handleClick = () => {
    // link to an modal (open modal)
    if (link.includes("Modal")) {
      const toBeExecuted = modalHandlers[link];
      toBeExecuted();
      return;
    }

    // link to a page with userId
    if (link.includes("?currentUserId")) {
      const page = link.split("?")[0];
      navigate(`${page}?${userId}`);
      return;
    }

    // link to a page
    navigate(link);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex items-center justify-center gap-x-2 text-lmGrey300 duration-300 hover:scale-101 hover:text-lmGrey600 active:scale-99 dark:text-dmGrey300 dark:shadow-dmShadow dark:hover:text-dmGrey100 ${styles.LmDmHoverBorder} w-full rounded-lg px-4 py-3 shadow`}
    >
      <i
        className={`${icon} flex h-[14px] min-h-[14px] w-[14px] min-w-[14px] items-center justify-center text-[14px]`}
      />
      <span className="flex w-full text-sm text-lmGrey600 dark:text-dmGrey100">
        {btnTitle}
      </span>
      <i
        className={`${
          (secondIcon === undefined || secondIcon) &&
          "fa-solid fa-chevron-right"
        } flex h-[14px] min-h-[14px] w-[14px] min-w-[14px] items-center justify-center text-[14px]`}
      />
    </button>
  );
};

export default ProfileButton;
