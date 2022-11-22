import { AnimatePresence, motion } from "framer-motion";
import { useImageCarouselHelper } from "../hooks/useImageCarouselHelper";

const ImageCarousel = ({ offerImages }) => {
  const { count, direction, handleContinue, handlePrevious } =
    useImageCarouselHelper();

  return (
    <AnimatePresence>
      <motion.div
        key={count}
        initial={{
          opacity: [0.9, 0.96, 1],
          scale: direction >= 0 ? [1.01, 0.5, 1] : [0.99, 1.5, 1],
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.3,
          opacity: { delay: 0.2 },
          scale: { ease: "easeInOut" },
        }}
        className="fixed top-0 left-0 bottom-0 hidden h-screen w-6/12 items-center justify-center rounded-r-[60px] bg-black bg-cover bg-center shadow-md 1200:flex"
        style={{ backgroundImage: `url(${offerImages[count]})` }}
      >
        <div className="flex w-full items-center justify-between px-6 opacity-60">
          <button
            onClick={() => handlePrevious(offerImages)}
            aria-hidden="true"
            className="fa-solid fa-chevron-left flex h-[84px] w-[84px] items-center justify-center text-[36px] text-white"
          />
          <button
            onClick={() => handleContinue(offerImages)}
            aria-hidden="true"
            className="fa-solid fa-chevron-right flex h-[84px] w-[84px] items-center justify-center text-[36px] text-white"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageCarousel;
