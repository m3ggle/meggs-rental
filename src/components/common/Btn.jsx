import React from "react";
import styles from "../../style";

const Btn = ({ type, title, icon, onClick, onSubmit, uiType }) => {
  const handleClick = () => onClick !== undefined && onClick();
  const handleSubmit = () => onSubmit !== undefined && onSubmit();

  const renderUiTypeClasses = () => {
    if (uiType === "primary") {
      return `bg-lmPrimary text-white ${
        !title && icon ? "" : "shadow-lg"
      } dark:bg-dmPrimary dark:hover:bg-lmPrimary hover:shadow-lg active:shadow-sm`;
    } else if (uiType === "secondary") {
      return `${styles.darkModeBorder} bg-primary100 text-lmPrimary dark:bg-transparent dark:text-lmGrey100 dark:hover:border-dmGrey600`;
    } else {
      return "";
    }
  };

  return (
    <button
      onClick={handleClick}
      onSubmit={handleSubmit}
      type={type === undefined ? "button" : type}
      className={`
      ${renderUiTypeClasses()} flex w-full ${
        title ? "w-full py-3 px-4" : "h-10 min-h-[40px] w-10 min-w-[40px]"
      } items-center justify-center gap-x-2 rounded-lg text-sm font-semibold duration-300 hover:scale-101 active:scale-99`}
    >
      {title}
      {icon && <i className={`${icon}`} />}
    </button>
  );
};

export default Btn;
