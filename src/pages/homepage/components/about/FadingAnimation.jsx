import { motion } from "framer-motion";

const FadingAnimation = ({ children, duration = 5, delay = 3 }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadingAnimation;
