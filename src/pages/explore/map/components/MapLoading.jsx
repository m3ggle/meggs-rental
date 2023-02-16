import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Loading from "../../../../components/Loading";
import { useWindowSize } from "../../../../hooks/useWindowSize";

const MapLoading = ({ isLoading }) => {
  const windowWidth = useWindowSize().width;

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
      {isLoading && windowWidth > 1100 && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          transition="transition"
          variants={loadingVariant}
          className={`absolute top-20 z-20 flex h-11 items-center justify-center rounded-full bg-white/80 px-6 shadow-md backdrop-blur-lg dark:bg-dmGrey900 dark:text-white 1100:top-7`}
        >
          <Loading width={44} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MapLoading;
