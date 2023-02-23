import { motion } from "framer-motion";

const FadingAnimation = ({ children, duration = 5, delay = 3 }) => {
  return (
    <motion.div
      //   animate={{ opacity: [0.3, 1, 0.3] }}
      //   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}

            initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          duration,
          ease: "easeInOut",
          yoyo: Infinity,
          delay,
        }}

    //   animate={{ opacity: [0, 1, 1, 1, 1, 0,] }}
    //   transition={{ duration: 5, repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
};

export default FadingAnimation;