import React from "react";
import { useNavigate } from "react-router-dom";
import { useSignOutAPI } from "../../../api/firebase/useSignOutAPI";
import styles from "../../../style";

const ProfileButton = ({ btnTitle, icon, link, secondIcon }) => {
  const navigate = useNavigate();
  const { signOutUser } = useSignOutAPI();
  
  const handleClick = () => {
    if (btnTitle === "Sign Out") {
      signOutUser()
    }
    navigate(link)
  }
  
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex items-center justify-center gap-x-2 text-lmGrey300 duration-300 hover:scale-101 hover:text-lmGrey600 active:scale-99 dark:text-dmGrey300 dark:hover:text-dmGrey100 ${styles.LmDmHoverBorder} w-full rounded-lg px-4 py-3 shadow`}
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
