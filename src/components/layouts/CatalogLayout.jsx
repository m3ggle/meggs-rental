import React from "react";
import { useRenderFilter } from "../../hooks/useRenderFilter";

const CatalogLayout = ({ children }) => {
  const { renderFilter } = useRenderFilter();

  return (
    <div className="flex w-full max-w-[1440px] flex-col gap-6 p-6 600:p-12 1000:flex-row 1000:p-14">
      <div className="relative w-full 1000:flex 1000:h-full 1000:w-[340px] 1000:min-w-[340px] 1000:justify-center">
        <div className="hideScrollbar flex w-full justify-center 1000:fixed 1000:left-14 1000:top-14 1000:h-full 1000:w-[340px] 1000:max-w-[340px] 1000:overflow-scroll 1000:pb-12 1400:left-auto">
          {renderFilter()}
        </div>
      </div>
      {/* <div className="catalog-grid"> */}
      <div className="flex h-fit w-full flex-wrap justify-center gap-2 600:gap-4">
        {children}
      </div>
    </div>
  );
};

export default CatalogLayout;
