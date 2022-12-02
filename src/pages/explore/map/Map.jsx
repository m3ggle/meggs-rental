import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
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
  const [filteredBoundsOffers, setFilteredBoundsOffers] = useState();
  const [filterTypeSearchParamsState, setFilterTypeSearchParamsState] =
    useState({});
  const [isLoading, setIsLoading] = useState(false);

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
      setFilteredOffers(tempHolder);
      setFilterTypeSearchParamsState(filterTypeSearchParams);
      return;
    }
  }, [searchParams]);

  const filterByBounds = useCallback(
    (offers) => {
      let filtered = [];
      if (Object.keys(bounds).length > 0) {
        filtered = offers.filter(
          (offer) =>
            offer.location.lat > bounds.south &&
            offer.location.lat < bounds.north &&
            offer.location.lng > bounds.west &&
            offer.location.lng < bounds.east
        );
        console.log(filtered);
        return filtered;
      } else {
        return offers;
      }
    },
    [bounds]
  );

  // mock (waiting on the api)
  const refetching = async () => {
    return await new Promise(() => {
      setTimeout(() => {
        console.log("refetching for 2 seconds");
        setFilteredBoundsOffers(filterByBounds(filteredOffers ?? offers));
        setIsLoading(false);
      }, 1000);
    });
  };

  // bounds with debounce
  useEffect(() => {
    const identifier = setTimeout(() => {
      setIsLoading(true);
      refetching();
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
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, translateY: -24 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 16 }}
            transition={{
              duration: 0.3,
              scale: { ease: "easeInOut" },
            }}
            className={`absolute ${mobileOfferInformation ? "top-52" : "top-20"} z-20 flex h-11 animate-pulse items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-lmGrey600 dark:bg-dmGrey900 dark:text-white shadow-md 1100:top-7`}
          >
            Loading...
          </motion.div>
        )}
      </AnimatePresence>
      <MapView
        offers={filteredBoundsOffers ?? filteredOffers ?? offers}
        isLoading={isLoading}
      />
      {windowSize.width >= 1100 ? (
        <>
          <div className="absolute right-7 top-7 z-20 flex h-fit w-fit">
            <MobileCatalog
              offerList={filteredBoundsOffers ?? filteredOffers ?? offers}
            />
          </div>
          <div className="absolute left-7 top-7 bottom-7 z-20 flex h-[640px] w-fit max-w-[360px] overflow-scroll rounded-2xl bg-white shadow-xl">
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
