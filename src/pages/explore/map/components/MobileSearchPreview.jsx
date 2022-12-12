import { motion, useAnimation } from "framer-motion";
import React from "react";
import SearchFilter from "../../../../components/filter/SearchFilter";
import MobileCatalogOfferCard from "../../../../components/offerCard/nonResponsive/mobileOfferCard/MobileOfferCard";
import { useHandleDragEnd } from "./preview/hooks/useHandleDragEnd";

const MobileSearchPreview = ({ offerInformation, onDelete }) => {
  const controls = useAnimation();

  const { handleDragEnd } = useHandleDragEnd({ controls, onDelete });

  return (
    <div className="absolute top-4 z-50 flex h-12 w-full flex-col items-center gap-y-2">
      <div className="w-[340px] max-w-[340px]">
        <SearchFilter
          definedActions="mapCatalog"
          choice="autocomplete"
          showSubmitButton={false}
        />
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
