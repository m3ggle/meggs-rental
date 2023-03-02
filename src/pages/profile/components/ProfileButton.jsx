import React from "react";
import { useNavigate } from "react-router-dom";
import { toastNotify } from "../../../components/toastNotify/toastNotify";
import supabase from "../../../config/supabaseClient";
import { useUserContext } from "../../../context/user/userContext";
import { useUserDetailsModalContext } from "../../../context/userDetailsModal/userDetailsModalContext";
import styles from "../../../style";

const ProfileButton = ({ information }) => {
  const { btnTitle = "", icon = "", link = "", secondIcon = "" } = information;

  const { openUserDetailsModal } = useUserDetailsModalContext();
  const { userId, dispatchUser } = useUserContext();
  const { notifyStandard } = toastNotify();

  const navigate = useNavigate();

  const handleUserModal = () => {
    openUserDetailsModal(userId);
  };

  const handleSignOutModal = async () => {
    const { errorSignOut } = await supabase.auth.signOut();

    if (errorSignOut) {
      notifyStandard({
        information: {
          type: "warning",
          content: errorSignOut.message,
        },
        id: "SignOutError",
      });
      console.log("this is an error (signOut)", errorSignOut);
      return;
    }
    dispatchUser({
      type: "SET_USER_CONTEXT_DEFAULT",
    });
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
