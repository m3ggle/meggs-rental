import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

const ToastMessage = ({ information, t }) => {
  const { from, content, navigateTo } = information;
    const navigate = useNavigate();
    
  const handleClick = () => {
    navigate(navigateTo);
  };

  const loadingVariant = {
    initial: {
      opacity: 0,
      translateY: -24,
    },
    animate: {
      opacity: 1,
      translateY: 0,
    },
    exit: {
      opacity: 0,
      translateY: 16,
    },
    transition: {
      duration: 0.3,
      scale: { ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      {t.visible && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          transition="transition"
          variants={loadingVariant}
          onClick={handleClick}
          className="flex h-fit max-h-[96px] dark:border-solid dark:border-[1px] cursor-pointer dark:border-dmGrey800/80 w-fit max-w-[300px] gap-x-4 rounded-[12px] bg-white/80 py-4 px-6 text-lmGrey700 shadow-md dark:bg-dmGrey900/80 dark:text-dmGrey25 dark:shadow-dmShadow min-w-[300px]"
        >
          <div className="mt-2 flex h-6 w-6 items-center justify-center ">
            <i className="fa-solid fa-comments text-[24px] " />
          </div>
          <div className="flex h-fit w-full flex-col">
            <span className="text-base font-semibold">{from}</span>
            <span className="text-sm text-lmGrey600 line-clamp-[2] dark:text-dmGrey100">
              {content}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ToastMessage;
