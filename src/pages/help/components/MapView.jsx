import React, { useCallback, useEffect, useRef, useState } from "react";
import Map, { Marker } from "react-map-gl";
import { useUrlManipulation } from "../../../hooks/urlManipulation/useUrlManipulation";

const MapView = ({ offers }) => {
  const { searchParams, setSingleParam, getSingleParam } = useUrlManipulation();
  const handleMarkerClick = (id) => setSingleParam("offerId", id);

  // map stuff
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoibTFnZ2xlIiwiYSI6ImNsYXVtaHM0ejA1eTgzdm1wMmRkaDBnNDAifQ.ayNDhREPUzI4mBOyVjor6A";
  const mapRef = useRef();

  const [viewState, setViewState] = useState({
    latitude: 52.4199,
    longitude: 13.29384,
    zoom: 14,
  });

  const [staticState] = useState({
    style: { width: "100%", height: "100%" },
    mapStyle: "mapbox://styles/m1ggle/clavbv34v006214nkabl8az22",
    mapboxAccessToken: MAPBOX_TOKEN,
  });

  const [activeMarker, setActiveMarker] = useState();
  const [hoverMarker, setHoverMarker] = useState();

  const handleMoveEnd = useCallback((e) => {
    console.log(mapRef.current.getBounds());
    console.log(mapRef.current);
    console.log(
      "lat: ",
      e.viewState.latitude,
      "long: ",
      e.viewState.latitude,
      "zoom: ",
      e.viewState.latitude
    );
  }, []);

  useEffect(() => {
    const currentUrlOfferId = getSingleParam("offerId");
      setActiveMarker(currentUrlOfferId);
      setHoverMarker(undefined)
  }, [searchParams, setActiveMarker, getSingleParam]);

  useEffect(() => {
    const currentUrlOfferId = getSingleParam("hoverId");
    setHoverMarker(currentUrlOfferId);
  }, [searchParams, setHoverMarker, getSingleParam]);

  return (
    <Map
      {...viewState}
      {...staticState}
      ref={mapRef}
      onMove={(evt) => setViewState(evt.viewState)}
      onMoveEnd={handleMoveEnd}
    >
      {offers.map((offer) => (
        <Marker
          key={offer.offerId}
          longitude={offer.location.lon}
          latitude={offer.location.lat}
          style={{
            width: "44px",
            height: "44px",
            zIndex:
              activeMarker === offer.offerId
                ? "20"
                : hoverMarker === offer.offerId
                ? "10"
                : "0",
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
    </Map>
  );
};

export default MapView;
