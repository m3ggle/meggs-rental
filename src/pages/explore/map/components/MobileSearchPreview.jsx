import { motion, useAnimation } from "framer-motion";
import React from "react";
import SearchFilter from "../../../../components/filter/SearchFilter";
import MobileCatalogOfferCard from "../../../../components/offerCard/nonResponsive/mobileOfferCard/MobileOfferCard";

const MobileSearchPreview = ({ offerInformation, onDelete }) => {
  const controls = useAnimation();
  // const {deleteSingleParam} = useUrlManipulation()

  async function handleDragEnd(_, info) {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -100 || velocity < -500) {
      await controls.start({ x: "-100%", transition: { duration: 0.2 } });
      onDelete();
    } else {
      controls.start({ x: 0, opacity: 1, transition: { duration: 0.5 } });
    }
  }

  return (
    <div className="absolute top-4 z-50 flex h-12 w-full flex-col items-center gap-y-2">
      <div
        className="w-[340px] max-w-[340px]"
        // className="min-w-[300px] w-8/12 max-w-[340px]"
      >
        <SearchFilter choice="autocomplete" showSubmitButton={false} />
      </div>
      {offerInformation && (
        <motion.div
          whileTap={{ cursor: "grabbing" }}
          layout
          transition={{ type: "spring", stiffness: 600, damping: 30 }}
          className="h-[120px] min-h-[120px] w-[340px] max-w-[340px] overflow-hidden rounded-lg"
        >
          <motion.div
            drag="x"
            dragDirectionLock
            onDragEnd={handleDragEnd}
            animate={controls}
            className="h-fit w-[340px] max-w-[340px]"
          >
            <MobileCatalogOfferCard
              offerInformation={offerInformation}
              index={0}
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default MobileSearchPreview;
