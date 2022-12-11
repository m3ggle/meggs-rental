import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Map, { Layer, Marker } from "react-map-gl";
import { useMapCoordContext } from "../../../../context/map/mapCoord/mapCoordContext";
import { useMapSubContext } from "../../../../context/map/mapSub/mapSubContext";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";
import { useFlyTo } from "../hooks/useFlyTo";
import { useHandleMapInit } from "../hooks/useHandleMapInit";
import { useHandleMoveEnd } from "../hooks/useHandleMoveEnd";

const MapView = ({ offers }) => {
  const { activeMarker, hoverMarker, dispatchMapSub, mapLoaded } =
    useMapSubContext();
  const handleMarkerClick = (id) =>
    dispatchMapSub({ type: "UPDATE_ACTIVE_MARKER", payload: id });
  // const handleMarkerClick = (id) => setSingleParam("offerId", id);

  const { setArrayOfParams } = useUrlManipulation();

  const {
    position: positionContext,
    externalPositionChange,
    dispatchMapCoord,
  } = useMapCoordContext();

  // map stuff
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoibTFnZ2xlIiwiYSI6ImNsYXVtaHM0ejA1eTgzdm1wMmRkaDBnNDAifQ.ayNDhREPUzI4mBOyVjor6A";
  const mapRef = useRef();

  const [position, setPosition] = useState(null);

  useEffect(() => {
    // mapView init

    // if anything is inside ctx
    // if (positionContext.lng && positionContext.lat && positionContext.z) {
    //   console.log("in position ctx is something, wtf: ", positionContext);
    //   setPosition({
    //     latitude: positionContext.lat,
    //     longitude: positionContext.lng,
    //     zoom: positionContext.z,
    //   });
    //   return;
    // }

    // if anything is inside externalPositionChange ctx
    if (
      externalPositionChange?.lng &&
      externalPositionChange?.lat &&
      externalPositionChange?.z
    ) {
      setArrayOfParams({
        lat: externalPositionChange.lat,
        lng: externalPositionChange.lng,
        z: externalPositionChange.z,
      });
      setPosition({
        latitude: externalPositionChange.lat,
        longitude: externalPositionChange.lng,
        zoom: externalPositionChange.z,
      });
      dispatchMapCoord({
        type: "SET_EXTERNAL_POSITION_CHANGES",
        payload: null,
      });
      return;
    }
    // look in localStorage

    // look in userProfile

    // use default
    console.log("uses default");
    setPosition({
      latitude: 52.4199,
      longitude: 13.29384,
      zoom: 14,
    });
  }, []);

  // clean up
  useEffect(() => {
    return () => {
      dispatchMapCoord({
        type: "SET_POSITION",
        payload: { lat: null, lng: null, z: null },
      });
      dispatchMapSub({
        type: "SET_MAP_LOAD",
        payload: false,
      });
    };
  }, [dispatchMapCoord, dispatchMapSub]);

  // if a external component changes the position, react to it (eg. in filterModal autocomplete)
  useEffect(() => {
    if (externalPositionChange !== null && mapLoaded) {
      console.log("i guess, my mistake");
      setPosition({ ...externalPositionChange });
    }
  }, [externalPositionChange]);

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

  console.log(position, mapLoaded);

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
