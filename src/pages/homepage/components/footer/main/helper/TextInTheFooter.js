export const textInTheFooter = (item) => {
  return item.type === "title"
    ? "font-bold text-lmGrey800"
    : `text-lmGrey600 ${
        item.linkTo
          ? "cursor-pointer hover:text-lmGrey800 active:text-lmPrimary dark:hover:text-dmGrey25 dark:active:text-dmPrimary"
          : "cursor-text"
      }  w-fit duration-300 dark:text-dmGrey100`;
};
