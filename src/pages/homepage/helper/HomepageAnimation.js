export const inViewContainerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
  transition: {
    delay: 0.1,
  },
};
// export const inViewContainerVariants = {
//   initial: {
//     opacity: 0,
//     translateY: 50,
//   },
//   animate: {
//     opacity: 1,
//     translateY: 0,
//   },
//   transition: {
//     opacity: { duration: 0.3 },
//     translateY: { duration: 0.6 },
//     ease: "easeInOut",
//     delay: 0.1,
//     delayChildren: 0.5,
//     staggerDirection: -1,
//   },
// };

export const inViewItemVariants = {
  initial: {
    opacity: 0,
    translateY: 50,
  },
  animate: {
    opacity: 1,
      translateY: 0,
      transition: {
        duration: .5
    }
  },
};
