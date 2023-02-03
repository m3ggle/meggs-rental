import React from "react";
import { useMapSubContext } from "../../../context/map/mapSub/mapSubContext";
import { useWindowSize } from "../../../hooks/useWindowSize";
import DesktopSearchPreview from "./components/DesktopSearchPreview";
import MapLoading from "./components/MapLoading";
import MapView from "./components/MapView";
import MobileSearchPreview from "./components/MobileSearchPreview";
import { useMapGetOffers } from "./hooks/useMapGetOffers";

const Map = () => {
  const windowSize = useWindowSize();
  const { mapLoaded, activeMarker } = useMapSubContext();

  const { offers, isLoading } = useMapGetOffers();

  return (
    <div
      style={{ height: `${windowSize.height}px` }}
      className={`flex w-full justify-center`}
    >
      <MapLoading isLoading={isLoading} />
      <MapView offers={offers} />
      {windowSize.width >= 1100 ? (
        <DesktopSearchPreview
          mapLoaded={mapLoaded}
          offers={offers}
          activeMarkerId={activeMarker}
        />
      ) : (
        <MobileSearchPreview offerId={activeMarker} />
      )}
    </div>
  );
};

export default Map;
