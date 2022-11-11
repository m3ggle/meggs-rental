import React from "react";
import styles from "../style";

const Btn = ({ type, title, onClick, onSubmit, uiType }) => {
  const handleClick = () => onClick !== undefined && onClick();
  const handleSubmit = () => onSubmit !== undefined && onSubmit();
  return (
    <button
      onClick={handleClick}
      onSubmit={handleSubmit}
      type={type === undefined ? "button" : type}
      className={`${
        uiType === "primary"
          ? "bg-lmPrimary text-white shadow-lg dark:bg-dmPrimary dark:hover:bg-lmPrimary"
          : uiType === "secondary"
          ? `${styles.darkModeBorder} bg-primary100 text-lmPrimary dark:bg-transparent dark:text-lmGrey100 dark:hover:border-dmGrey600`
          : ""
      } flex w-full items-center justify-center rounded-lg py-3 px-4 text-sm font-semibold duration-300 hover:scale-101 active:scale-99`}
    >
      {title}
    </button>
  );
};

export default Btn;
