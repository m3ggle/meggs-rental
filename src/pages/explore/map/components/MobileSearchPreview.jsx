import React from "react";
import SearchFilter from "../../../../components/filter/SearchFilter";
import PreviewLittle from "./previewLittle/PreviewLittle";

const MobileSearchPreview = ({ offerId }) => {
  return (
    <div className="absolute top-4 z-50 flex h-12 w-full flex-col items-center gap-y-2">
      <div className="w-[340px] max-w-[340px]">
        <SearchFilter
          definedActions="mapCatalog"
          choice="autocomplete"
          showSubmitButton={false}
        />
      </div>
      {offerId !== null && <PreviewLittle />}
    </div>
  );
};

export default MobileSearchPreview;
