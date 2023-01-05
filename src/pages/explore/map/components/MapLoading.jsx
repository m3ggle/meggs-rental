import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useDarkModeContext } from "../../../../context/darkMode/darkModeContext";

const MapLoading = ({ isLoading, mobileOfferInformation }) => {
  const { darkMode } = useDarkModeContext();

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
      {isLoading && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          transition="transition"
          variants={loadingVariant}
          className={`absolute ${
            mobileOfferInformation ? "top-52" : "top-20"
          } z-20 flex h-11 items-center justify-center rounded-full bg-white/80 px-6 shadow-md backdrop-blur-lg dark:bg-dmGrey900 dark:text-white 1100:top-7`}
        >
          <img
            className="w-11 opacity-90"
            src={`https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FthreeDotsLoading${
              darkMode ? "Dm" : "Lm"
            }.svg?alt=media&token=0e60be95-2b3a-4e03-88f0-a329a1397a88`}
            alt="loading"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MapLoading;
