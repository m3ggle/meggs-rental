import React from "react";
import SearchFilter from "../../../../../components/filter/SearchFilter";
import MobileCatalogList from "./MobileCatalogList";

const MobileCatalog = ({ offerList }) => {
  return (
    <div
      className={`relative flex h-[640px] w-[360px] max-w-[360px] flex-col items-center gap-y-3 overflow-scroll rounded-2xl bg-white py-6 shadow-xl duration-300 dark:bg-dmGrey900`}
    >
      <div className="w-[312px]">
        <SearchFilter choice="autocomplete" showSubmitButton={false} />
      </div>

      <div className="hideScrollbar flex w-full flex-grow flex-col items-center overflow-scroll rounded-lg pb-4">
        <div className={`flex w-[312px] flex-col gap-y-3 rounded-lg`}>
          <MobileCatalogList offerList={offerList} />
        </div>
      </div>
    </div>
  );
};

export default MobileCatalog;
