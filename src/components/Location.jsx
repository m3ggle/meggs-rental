import React, { useRef, useState } from "react";
import Map, { Marker } from "react-map-gl";

const Location = ({ lng, lat }) => {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
  const mapRef = useRef();

  const [position, setPosition] = useState({
    longitude: lng,
    latitude: lat,
    zoom: 14,
  });

  const [staticState] = useState({
    style: { width: "100%", height: "100%" },
    mapStyle: "mapbox://styles/m1ggle/clavbv34v006214nkabl8az22",
    mapboxAccessToken: MAPBOX_TOKEN,
    maxZoom: 18
  });

  const handleZoom = (event) => setPosition({ ...position, zoom: event.viewState.zoom });

  return (
    <Map {...position} {...staticState} ref={mapRef} onZoom={handleZoom}>
      <Marker
        latitude={position.latitude}
        longitude={position.longitude}
        anchor="bottom"
      >
        <div className="fa-solid fa-location-dot text-[44px] text-lmPrimary drop-shadow-lg duration-300" />
      </Marker>
    </Map>
  );
};

export default Location;
