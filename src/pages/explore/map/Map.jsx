import React, { useEffect, useState } from "react";
import SearchFilter from "../../../components/filter/SearchFilter";
import { useMapContext } from "../../../context/map/mapContext";
import ExampleData from "../../../ExampleData";
import { useFilterByCustomObject } from "../../../hooks/FilterByCustomObject/useFilterByCustomObject";
import { useUrlManipulation } from "../../../hooks/urlManipulation/useUrlManipulation";
import { useDebounce } from "../../../hooks/useDebounce";
import { useWindowSize } from "../../../hooks/useWindowSize";
import MapView from "./components/MapView";
import MobileCatalog from "./components/mobileCatalog/MobileCatalog";
import MobileCatalogOfferCard from "./components/mobileCatalog/MobileCatalogOfferCard/MobileCatalogOfferCard";
import { usePreviewLogic } from "./components/preview/hooks/usePreviewLogic";
import Preview from "./components/preview/Preview";

const { exampleOffers, filterTypes } = ExampleData();

const Map = () => {
  const [offers, setOffers] = useState(exampleOffers);
  const [filteredOffers, setFilteredOffers] = useState();
  const [filterTypeSearchParamsState, setFilterTypeSearchParamsState] =
    useState({});

  // const [mobileSizeOffer, setMobileSizeOffer] = useState();
  const { show, offerInformation: mobileOfferInformation } = usePreviewLogic();
  const windowSize = useWindowSize();

  const { bounds } = useMapContext();
  const { searchParams } = useUrlManipulation();
  const { filterByCustomObject } = useFilterByCustomObject();

  // filtering
  useEffect(() => {
    let filterTypeSearchParams = {}; // storage for the current filter type params
    // get only the params which are inside filterTypes Array (getArrayOfParams would also give back values like null)
    for (const [key, value] of searchParams.entries()) {
      if (filterTypes.includes(key)) {
        filterTypeSearchParams[key] = value;
      }
    }

    if (
      JSON.stringify(filterTypeSearchParams) !==
      JSON.stringify(filterTypeSearchParamsState)
    ) {
      // not the same, do filtering
      const tempHolder = filterByCustomObject({
        offerList: exampleOffers,
        object: filterTypeSearchParams,
      });
      setFilteredOffers(tempHolder);
      setFilterTypeSearchParamsState(filterTypeSearchParams);
      return;
    }
  }, [searchParams]);

  // bounds with debounce
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("refetching");
    }, 1000);

    return () => {
      clearTimeout(identifier);
    };
  }, [bounds]);

  return (
    <div className="flex h-screen w-full justify-center">
      <MapView offers={filteredOffers ?? offers} />
      {windowSize.width >= 1100 ? (
        <>
          <div className="absolute right-7 top-7 z-20 flex h-fit w-fit">
            <MobileCatalog offerList={filteredOffers ?? offers} />
          </div>
          <div className="absolute left-7 top-7 bottom-7 z-20 flex h-[640px] w-fit max-w-[360px] overflow-scroll rounded-xl bg-white shadow-xl">
            <Preview />
          </div>
        </>
      ) : (
        <div className="absolute top-4 flex h-12 w-full flex-col items-center gap-y-2">
          <div className="w-[340px] max-w-[340px]">
            <SearchFilter choice="autocomplete" showSubmitButton={false} />
          </div>
          {mobileOfferInformation && (
            <div className="w-[340px] max-w-[340px]">
              <MobileCatalogOfferCard
                offerInformation={mobileOfferInformation}
                index={0}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Map;
