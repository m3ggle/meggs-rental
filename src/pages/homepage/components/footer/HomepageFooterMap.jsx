import React, { useEffect, useRef, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { useWindowSize } from "../../../../hooks/useWindowSize";

const HomepageFooterMap = () => {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoibTFnZ2xlIiwiYSI6ImNsYXVtaHM0ejA1eTgzdm1wMmRkaDBnNDAifQ.ayNDhREPUzI4mBOyVjor6A";
  const mapRef = useRef();

  const windowSize = useWindowSize();

  console.log(windowSize.width < 700);

  const [position, setPosition] = useState({
    longitude: 13.391487,
    latitude: 52.522124,
    zoom: 14,
  });

  useEffect(() => {
    if (windowSize.width < 700) {
      setPosition({
        longitude: 13.396487,
        latitude: 52.540124,
        zoom: 13,
      });
      return;
    }

    if (position.latitude !== 52.522124) {
      setPosition({
        longitude: 13.391487,
        latitude: 52.522124,
        zoom: 14,
      });
      return 
    }
  }, [windowSize.width]);

  const [staticState] = useState({
    style: { width: "100%", height: "100%" },
    mapStyle: "mapbox://styles/m1ggle/clavbv34v006214nkabl8az22",
    mapboxAccessToken: MAPBOX_TOKEN,
    maxZoom: 18,
  });

  const handleZoom = (event) =>
    setPosition({ ...position, zoom: event.viewState.zoom });

  const handleFly = () => {
    mapRef.current.flyTo({
      center: [13.391487, 52.522124],
      essential: true,
      zoom: 14,
    });
  };

  return (
    <div className="absolute top-0 left-0 z-0 h-full w-full">
      <Map
        {...position}
        {...staticState}
        ref={mapRef}
        onMove={(evt) => setPosition(evt.position)}
        // onZoom={handleZoom}
      >
        <Marker
          onClick={handleFly}
          latitude={52.514124}
          longitude={13.401487}
          anchor="bottom"
        >
          <div className="fa-solid fa-location-dot text-[44px] text-lmPrimary drop-shadow-lg duration-300" />
        </Marker>
        <Popup
          longitude={13.401487}
          latitude={52.514124}
          anchor="bottom"
          offset={48}
          closeButton={false}
          style={{
            width: "312px",
            backgroundColor: "white",
            boxShadow:
              "0px 1px 2px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.06)",
            borderRadius: "12px",
            padding: "24px",
            gap: "4px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Friedrichsgracht 58-110</span>
          <br />
          <span>10178 Berlin, Germany</span>
        </Popup>
      </Map>
    </div>
  );
};

export default HomepageFooterMap;
