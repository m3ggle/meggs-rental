import React, { useCallback, useEffect, useState } from "react";
import { useMapCoordContext } from "../../../context/map/mapCoord/mapCoordContext";
import { useMapSubContext } from "../../../context/map/mapSub/mapSubContext";
import ExampleData from "../../../ExampleData";
import { useFilterByCustomObject } from "../../../hooks/FilterByCustomObject/useFilterByCustomObject";
import { useUrlManipulation } from "../../../hooks/urlManipulation/useUrlManipulation";
import { useWindowSize } from "../../../hooks/useWindowSize";
import DesktopSearchPreview from "./components/DesktopSearchPreview";
import MapLoading from "./components/MapLoading";
import MapView from "./components/MapView";
import MobileSearchPreview from "./components/MobileSearchPreview";
import { usePreviewLogic } from "./components/preview/hooks/usePreviewLogic";
import { useMapGetOffers } from "./hooks/useMapGetOffers";

const { exampleOffers, filterTypes } = ExampleData();

const Map = () => {
  const [offers] = useState(exampleOffers);
  const [filteredOffers, setFilteredOffers] = useState();
  const [filteredBoundsOffers, setFilteredBoundsOffers] = useState([]);
  const [filterTypeSearchParamsState, setFilterTypeSearchParamsState] =
    useState({});
  const [isLoading, setIsLoading] = useState(false);

  // const [mobileSizeOffer, setMobileSizeOffer] = useState();
  const { offerInformation: mobileOfferInformation, setOfferInformation } =
    usePreviewLogic();
  const windowSize = useWindowSize();
  const { bounds } = useMapCoordContext();
  const { mapLoaded } = useMapSubContext();
  const { searchParams, deleteArrayOfParams } = useUrlManipulation();
  const { filterByCustomObject } = useFilterByCustomObject();

  // entkopplung, heißt ein useEffect das die searchParams überwacht, wenn es geschehen ist speicher die filterTypes inside a state

  // test
  // const { offers, isLoading } = useMapGetOffers()

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
        console.log("bounds changed, fetching");
        // console.log("refetching for 1 seconds");
        setFilteredBoundsOffers(filterByBounds(filteredOffers ?? offers));

        setIsLoading(false);
      }, 1000);
    });
  };

  // bounds with debounce
  useEffect(() => {
    const identifier = setTimeout(() => {
      if (Object.keys(bounds).length > 0) {
        setIsLoading(true);
        refetching();
      }
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
    <div
      style={{ height: `${windowSize.height}px` }}
      className={`flex w-full justify-center`}
    >
      <MapLoading
        isLoading={isLoading}
        mobileOfferInformation={mobileOfferInformation}
      />
      <MapView offers={filteredBoundsOffers} />
      {windowSize.width >= 1100 ? (
        <DesktopSearchPreview
          mapLoaded={mapLoaded}
          filteredBoundsOffers={filteredBoundsOffers}
          filteredOffers={filteredOffers}
          offers={offers}
        />
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
