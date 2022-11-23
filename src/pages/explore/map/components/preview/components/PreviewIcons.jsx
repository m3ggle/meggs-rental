import React from 'react'

const PreviewIcons = ({liked}) => {
  return (
    <div className="absolute -top-[2px] right-0 flex h-fit w-fit cursor-pointer flex-col items-center justify-center text-[24px]">
      <i className="fa-solid fa-times flex h-8 w-8 items-center justify-center text-[28px] text-lmGrey600 drop-shadow duration-300 hover:scale-102 hover:text-lmGrey800 active:scale-99 dark:text-dmGrey100 dark:hover:text-dmGrey25" />
      <i
        className={`fa-solid fa-heart flex h-8 w-8 items-center justify-center drop-shadow duration-300 hover:scale-102 hover:text-red-400 active:scale-99 ${
          liked
            ? "text-red-500"
            : "text-lmGrey200 dark:hover:text-red-400 dark:text-dmGrey300"
        }`}
      />
    </div>
  );
}

export default PreviewIcons