import React, { useRef, useState } from "react";
import Map, { Marker } from "react-map-gl";
import { useMapContext } from "../../../../context/map/mapContext";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";
import { useFlyTo } from "../hooks/useFlyTo";
import { useHandleMapInit } from "../hooks/useHandleMapInit";
import { useHandleMoveEnd } from "../hooks/useHandleMoveEnd";
import { useMarkerLogic } from "../hooks/useMarkerLogic";

const MapView = ({ offers, isLoading }) => {
  const { flyTo, dispatchMap } = useMapContext();

  const { setSingleParam } = useUrlManipulation();
  const handleMarkerClick = (id) => setSingleParam("offerId", id);

  // map stuff
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoibTFnZ2xlIiwiYSI6ImNsYXVtaHM0ejA1eTgzdm1wMmRkaDBnNDAifQ.ayNDhREPUzI4mBOyVjor6A";
  const mapRef = useRef();

  const [position, setPosition] = useState({
    latitude: 52.4199,
    longitude: 13.29384,
    zoom: 14,
  });

  const [staticState] = useState({
    style: { width: "100%", height: "100%" },
    mapStyle: "mapbox://styles/m1ggle/clavbv34v006214nkabl8az22",
    mapboxAccessToken: MAPBOX_TOKEN,
  });

  // functionality after the drag movement stops
  const { handleMoveEnd } = useHandleMoveEnd({
    mapRef,
    setPosition,
  });

  // Markers (active and hover)
  const { activeMarker, hoverMarker } = useMarkerLogic();

  // flyTo functionality
  useFlyTo({ flyTo, mapRef, dispatchMap });

  // init
  const { handleInit } = useHandleMapInit(mapRef);

  return (
    <Map
      {...position}
      {...staticState}
      ref={mapRef}
      onMove={(evt) => setPosition(evt.position)}
      onMoveEnd={handleMoveEnd}
      onLoad={handleInit}
    >
      {offers.map((offer, index) => (
        <Marker
          longitude={offer.location.lng}
          latitude={offer.location.lat}
          style={{
            width: "44px",
            height: "44px",
            zIndex:
              activeMarker === offer.offerId
                ? "30"
                : hoverMarker === offer.offerId
                ? "20"
                : "10",
          }}
          anchor="bottom"
          onClick={() => handleMarkerClick(offer.offerId)}
        >
          <div
            className={`fa-solid fa-location-dot ${
              activeMarker === offer.offerId
                ? "scale-125 text-lmPrimary"
                : hoverMarker === offer.offerId
                ? "scale-110 text-lmGrey400"
                : "scale-100 text-lmGrey800"
            } text-[44px] drop-shadow-lg duration-300`}
          />
        </Marker>
      ))}
      {/* <NavigationControl position="bottom-right" style={{rotate: "-90deg", marginRight: "64px"}} /> */}
    </Map>
  );
};

export default MapView;
