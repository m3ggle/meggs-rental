import { motion } from 'framer-motion';
import React from 'react'
import MobileCatalog from './mobileCatalog/MobileCatalog';
import Preview from './preview/Preview';

const DesktopSearchPreview = ({
  mapLoaded,
  offers,
}) => {
  return (
    <>
      <motion.div
        animate={mapLoaded && "visible"}
        initial="hidden"
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 1 },
        }}
        className="absolute right-7 top-7 z-20 flex h-fit w-fit"
      >
        <MobileCatalog
          definedActions="mapCatalog"
          offerList={offers}
        />
      </motion.div>
      <div className="absolute left-7 top-7 z-20 flex h-fit w-fit">
        <Preview />
      </div>
    </>
  );
};

export default DesktopSearchPreview