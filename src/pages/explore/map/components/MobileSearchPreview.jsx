import { useAnimation } from "framer-motion";
import React from "react";
import SearchFilter from "../../../../components/filter/SearchFilter";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";
import MobileCatalogOfferCard from "./mobileCatalog/MobileCatalogOfferCard/MobileCatalogOfferCard";

const MobileSearchPreview = ({ offerInformation }) => {
    const controls = useAnimation();
    const {deleteSingleParam} = useUrlManipulation()

    async function handleDragEnd(_, info) {
      const offset = info.offset.x;
      const velocity = info.velocity.x;

      if (offset < -100 || velocity < -500) {
        await controls.start({ x: "-100%", transition: { duration: 0.2 } });
        deleteSingleParam("offerId")
      } else {
        controls.start({ x: 0, opacity: 1, transition: { duration: 0.5 } });
      }
    }
  
    return (
    <div className="absolute top-4 z-50 flex h-12 w-full flex-col items-center gap-y-2">
      <div className="w-[340px] max-w-[340px]">
        <SearchFilter choice="autocomplete" showSubmitButton={false} />
      </div>
      {offerInformation && (
        <div className="w-[340px] max-w-[340px] overflow-hidden">
          <MobileCatalogOfferCard
            offerInformation={offerInformation}
            index={0}
          />
        </div>
      )}
    </div>
  );
};

export default MobileSearchPreview;
