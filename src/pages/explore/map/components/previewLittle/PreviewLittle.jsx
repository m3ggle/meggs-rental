import { motion, useAnimation } from "framer-motion";
import React from "react";
import MobileOfferCard from "../../../../../components/offerCard/nonResponsive/mobileOfferCard/MobileOfferCard";
import { useMapSubContext } from "../../../../../context/map/mapSub/mapSubContext";
import { useGetOfferCard } from "../../../../../hooks/useGetOfferCard";
import { useHandleDragEnd } from "../preview/hooks/useHandleDragEnd";

const PreviewLittle = () => {
  const { activeMarker: offerId, dispatchMapSub } = useMapSubContext();
  const controls = useAnimation();

  const onDelete = () => {
    dispatchMapSub({ type: "UPDATE_ACTIVE_MARKER", payload: null });
  };

  const { handleDragEnd } = useHandleDragEnd({ controls, onDelete });

  const { offerInformation } = useGetOfferCard(offerId);

  return (
    <>
      {offerInformation !== undefined && (
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
            <MobileOfferCard offerInformation={offerInformation} index={0} />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default PreviewLittle;
