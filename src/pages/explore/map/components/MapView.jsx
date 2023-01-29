import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import Map, { Layer, Marker } from "react-map-gl";
import { useMapSubContext } from "../../../../context/map/mapSub/mapSubContext";
import { useFlyTo } from "../hooks/useFlyTo";
import { useHandleMapInit } from "../hooks/useHandleMapInit";
import { useHandleMoveEnd } from "../hooks/useHandleMoveEnd";
import { darkModeLayer } from "./helper/DarkModeLayer";
import { useCheckExternalChanges } from "./hooks/useCheckExternalChanges";
import { useMapViewCleanUp } from "./hooks/useMapViewCleanUp";
import { useMapViewInit } from "./hooks/useMapViewInit";
import { useStaticMapInformation } from "./hooks/useStaticMapInformation";

const MapView = ({ offers }) => {
  const { activeMarker, hoverMarker, dispatchMapSub } = useMapSubContext();

  // map stuff
  const mapRef = useRef();
  const { staticState } = useStaticMapInformation();
  const [position, setPosition] = useState(null);

  // when component gets initialized
  useMapViewInit({ setPosition });

  // when map loads, this function gets called
  const { handleInit } = useHandleMapInit(mapRef); // check

  // when the movement on the map stops
  const { handleMoveEnd } = useHandleMoveEnd({
    mapRef,
    setPosition,
  });

  // when there are external changes
  useCheckExternalChanges({ setPosition });

  // flyTo functionality
  useFlyTo({ mapRef });

  // when the component unmounts
  useMapViewCleanUp();

  // check wether dark mode is active or not (for darkLayer)
  const darkMode = document.documentElement.classList.contains("dark");

  // marker click
  const handleMarkerClick = (id) =>
    dispatchMapSub({ type: "UPDATE_ACTIVE_MARKER", payload: id });
  // marker animation
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
  };

  return (
    <>
      {position !== null && (
        <Map
          {...position}
          {...staticState}
          ref={mapRef}
          onMoveEnd={handleMoveEnd}
          onLoad={handleInit}
        >
          {offers.map((offer, index) => (
            <Marker
              key={offer.id}
              longitude={offer.longitude}
              latitude={offer.latitude}
              style={{
                width: "44px",
                height: "44px",
                zIndex:
                  activeMarker === offer.id
                    ? "15"
                    : hoverMarker === offer.id
                    ? "10"
                    : "5",
              }}
              anchor="bottom"
              onClick={() => handleMarkerClick(offer.id)}
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
                  activeMarker === offer.id
                    ? "text-lmPrimary dark:text-lmPrimary"
                    : hoverMarker === offer.id
                    ? "text-lmGrey400 dark:text-dmGrey400"
                    : "text-lmGrey800 dark:text-dmGrey900"
                } text-[44px] drop-shadow-lg duration-300`}
              />
            </Marker>
          ))}
          {darkMode && <Layer {...darkModeLayer} />}
          {/* <NavigationControl position="bottom-right" style={{rotate: "-90deg", marginRight: "64px"}} /> */}
        </Map>
      )}
    </>
  );
};

export default MapView;
