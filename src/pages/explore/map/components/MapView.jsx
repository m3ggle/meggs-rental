import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import Map, { Layer, Marker } from "react-map-gl";
import { useMapSubContext } from "../../../../context/map/mapSub/mapSubContext";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";
import { useFlyTo } from "../hooks/useFlyTo";
import { useHandleMapInit } from "../hooks/useHandleMapInit";
import { useHandleMoveEnd } from "../hooks/useHandleMoveEnd";
import { useMarkerLogic } from "../hooks/useMarkerLogic";

const MapView = ({ offers }) => {
  const { setSingleParam } = useUrlManipulation();
  const { activeMarker, hoverMarker, dispatchMapSub } = useMapSubContext();
  const handleMarkerClick = (id) =>
    dispatchMapSub({ type: "UPDATE_ACTIVE_MARKER", payload: id });
  // const handleMarkerClick = (id) => setSingleParam("offerId", id);

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
  // const { activeMarker, hoverMarker } = useMarkerLogic();


  // flyTo functionality
  useFlyTo({ mapRef });

  // init
  const { handleInit } = useHandleMapInit(mapRef);

  const darkModeLayer = {
    id: "darkModeLayer",
    type: "background",
    paint: {
      "background-color": "rgba(22, 26, 29, 0.2)",
    },
  };

  const darkMode = document.documentElement.classList.contains("dark");

  const markerVariants = {
    hover: ({ offer }) => ({
      scale: activeMarker === offer.offerId ? 1.25 : 1.1,
      transition: {
        duration: 0.1,
      },
    }),
    tap: {
      scale: 0.99,
      transition: {
        duration: 0.1,
      },
    },
    initial: { opacity: 0, translateY: -24, scale: 0.5 },
    animation: ({ offer }) => ({
      opacity: 1,
      translateY: 0,
      scale:
        activeMarker === offer.offerId
          ? 1.25
          : hoverMarker === offer.offerId
          ? 1.1
          : 1,
    }),
    transition: {
      duration: 0.3,
    },
    // idk but does not work
    // transition: ({ index }) => ({
    //   duration: 0.3,
    //   opacity: { delay: index * 0.2 },
    //   translateY: { delay: index * 0.2 },
    //   scale: { ease: "ease-out" },
    // }),
  };

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
          key={offer.offerId}
          longitude={offer.location.lng}
          latitude={offer.location.lat}
          style={{
            width: "44px",
            height: "44px",
            zIndex:
              activeMarker === offer.offerId
                ? "15"
                : hoverMarker === offer.offerId
                ? "10"
                : "5",
          }}
          anchor="bottom"
          onClick={() => handleMarkerClick(offer.offerId)}
        >
          <motion.div
            initial="initial"
            animate="animation"
            transition="transition"
            whileHover="hover"
            whileTap="tap"
            variants={markerVariants}
            custom={{ offer, index }}
            className={`fa-solid fa-location-dot ${
              activeMarker === offer.offerId
                ? "text-lmPrimary dark:text-lmPrimary"
                : hoverMarker === offer.offerId
                ? "text-lmGrey400 dark:text-dmGrey400"
                : "text-lmGrey800 dark:text-dmGrey800"
            } text-[44px] drop-shadow-lg duration-300`}
          />

          {/* <div
            className={`fa-solid fa-location-dot ${
              activeMarker === offer.offerId
                ? "scale-125 text-lmPrimary"
                : hoverMarker === offer.offerId
                ? "scale-110 text-lmGrey400"
                : "scale-100 text-lmGrey800"
            } text-[44px] drop-shadow-lg duration-300`}
          /> */}
        </Marker>
      ))}
      {darkMode && <Layer {...darkModeLayer} />}
      {/* <NavigationControl position="bottom-right" style={{rotate: "-90deg", marginRight: "64px"}} /> */}
    </Map>
  );
};

export default MapView;
