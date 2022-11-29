import React, { useEffect, useState } from "react";
import { MapProvider, useMapContext } from "../../context/map/mapContext";
import ExampleData from "../../ExampleData";
import { useFilterByCustomObject } from "../../hooks/FilterByCustomObject/useFilterByCustomObject";
import { useUrlManipulation } from "../../hooks/urlManipulation/useUrlManipulation";
import { useEnlargedBounds } from "../../hooks/useEnlargedBounds";
import MobileCatalog from "../explore/map/components/mobileCatalog/MobileCatalog";
import Preview from "../explore/map/components/preview/Preview";
import MapView from "./components/MapView";

const { exampleOffers } = ExampleData();
const filterTypes = [
  "search",

  "startDate",
  "endDate",
  "startPriceDay",
  "endPriceDay",
  "startPriceWeek",
  "endPriceWeek",
  "endPriceMonth",
  "startPriceMonth",

  // carSpec
  "color",
  "fuelType",
  "seats",
  "smoking",
  "transmission",
  "trunkVolume",
];

const Help = () => {
  const [offers, setOffers] = useState(exampleOffers);
  const [filteredOffers, setFilteredOffers] = useState();
  const [filterTypeSearchParamsState, setFilterTypeSearchParamsState] =
    useState({});

  const [currentBounds, setCurrentBounds] = useState()
  
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

  // bounds
  useEffect(() => { }, [
  ])


  return (
    
      <div className="h-screen w-full">
        <MapView offers={filteredOffers ?? offers} />
        <div className="absolute right-7 top-7 z-20 h-fit w-fit">
          <MobileCatalog offerList={filteredOffers ?? offers} />
        </div>
        <div className="absolute left-7 top-7 bottom-7 z-20 flex h-[640px] w-fit max-w-[360px] overflow-scroll rounded-xl bg-white shadow-xl">
          <Preview />
        </div>
      </div>
    
  );
};

export default Help;
