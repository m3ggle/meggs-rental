import React, { useEffect, useState } from "react";
import { useMapContext } from "../../../context/map/mapContext";
import ExampleData from "../../../ExampleData";
import { useFilterByCustomObject } from "../../../hooks/FilterByCustomObject/useFilterByCustomObject";
import { useUrlManipulation } from "../../../hooks/urlManipulation/useUrlManipulation";
import { useWindowSize } from "../../../hooks/useWindowSize";
import MapView from "./components/MapView";
import MobileCatalog from "./components/mobileCatalog/MobileCatalog";
import MobileSearchPreview from "./components/MobileSearchPreview";
import { usePreviewLogic } from "./components/preview/hooks/usePreviewLogic";
import Preview from "./components/preview/Preview";

const { exampleOffers, filterTypes } = ExampleData();

const Map = () => {
  const [offers, setOffers] = useState(exampleOffers);
  const [filteredOffers, setFilteredOffers] = useState();
  const [filterTypeSearchParamsState, setFilterTypeSearchParamsState] =
    useState({});

  // const [mobileSizeOffer, setMobileSizeOffer] = useState();
  const {
    show,
    offerInformation: mobileOfferInformation,
    setOfferInformation,
  } = usePreviewLogic();
  const windowSize = useWindowSize();

  const { bounds } = useMapContext();
  const { searchParams, deleteArrayOfParams } = useUrlManipulation();
  const { filterByCustomObject } = useFilterByCustomObject();

  // entkopplung, heißt ein useEffect das die searchParams überwacht, wenn es geschehen ist speicher die filterTypes inside a state

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
      let tempHolder = filterByCustomObject({
        offerList: exampleOffers,
        object: filterTypeSearchParams,
      });
      filterByBounds(tempHolder);
      setFilteredOffers(tempHolder);
      setFilterTypeSearchParamsState(filterTypeSearchParams);
      return;
    }
  }, [searchParams]);

  const filterByBounds = (offers) => {
    console.log(offers)
  };

  // bounds with debounce
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("refetching");
    }, 1000);

    return () => {
      clearTimeout(identifier);
    };
  }, [bounds]);

  const handleMobilePreviewDelete = () => {
    deleteArrayOfParams(["offerId", "hoverId"]);
    setOfferInformation(null);
  };

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
        <MobileSearchPreview
          offerInformation={mobileOfferInformation}
          onDelete={handleMobilePreviewDelete}
        />
      )}
    </div>
  );
};

export default Map;
