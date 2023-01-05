import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const ToastStandard = ({ information, t }) => {
  const { type, content } = information;

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
          className="flex h-fit max-h-[88px] min-h-[68px] w-fit max-w-[300px] cursor-default items-center justify-center gap-x-4 rounded-[12px] bg-white py-3 px-6 text-lmGrey700 shadow-md dark:border-[1px] dark:border-solid dark:border-dmGrey800 dark:bg-dmGrey900 dark:text-dmGrey25 dark:shadow-dmShadow"
        >
          <div className="mt-[2px] flex h-6 w-6 items-center justify-center ">
            <i
              className={`fa-solid fa-${
                type === "success"
                  ? "check"
                  : type === "info"
                  ? "circle-info"
                  : type === "warning"
                  ? "circle-exclamation"
                  : "triangle-exclamation"
              } text-[24px] `}
            />
          </div>
          <span className="w-full truncate text-base">{content}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ToastStandard;
