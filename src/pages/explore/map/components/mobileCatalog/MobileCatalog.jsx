import React, { useState } from "react";
import SearchFilter from "../../../../../components/filter/SearchFilter";
import MobileCatalogList from "./MobileCatalogList";

const MobileCatalog = ({ offerList }) => {
  const [extended, setExtended] = useState(false)

  const handleExtendedChange = () => {
    setExtended(prevState => !prevState)
  }

  const checkExtended = () => {
    !extended && handleExtendedChange()
  }

  return (
    <div
      onClick={checkExtended}
      className={`relative flex ${
        extended ? "h-[640px] py-6" : "h-[88px] pb-6 pt-2 cursor-pointer"
        } w-[360px] max-w-[360px] flex-col items-center gap-y-3 overflow-scroll rounded-2xl bg-white shadow-xl duration-300 dark:bg-dmGrey900`}
    >
      <div
        className={`w-[312px]`}
        // className={`${!extended && "pb-4"} w-[312px]`}
      >
        <SearchFilter choice="autocomplete" showSubmitButton={false} />
      </div>

      {extended && (
        <div className="hideScrollbar flex w-full flex-grow flex-col items-center overflow-scroll rounded-lg pb-4">
          <div className={`flex w-[312px] flex-col gap-y-3 rounded-lg`}>
            <MobileCatalogList offerList={offerList} />
          </div>
        </div>
      )}

      {/* extend or shrink */}
      <div
        onClick={handleExtendedChange}
        className={`${
          extended ? "h-12 min-h-[48px] hover:h-[56px] flex" : "hidden"
        } group absolute bottom-0 z-[15] w-full cursor-pointer items-center justify-center bg-gradient-to-b from-white backdrop-blur-md duration-300 dark:from-dmGrey900`}
      >
        <i
          className={`${
            extended
              ? "fa-solid fa-chevron-up mt-1"
              : "fa-solid fa-chevron-down"
          } text-[20px] text-lmGrey600 duration-300 group-hover:text-lmGrey800 dark:text-dmGrey100 dark:group-hover:text-lmGrey25`}
        />
      </div>
    </div>
  );
};

export default MobileCatalog;
