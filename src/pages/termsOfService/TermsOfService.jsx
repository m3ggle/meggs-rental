import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";

const TermsOfService = () => {
  return (
    <div className="w-full h-screen">
    <MapContainer
      // className="z-10 h-full w-full"
      // center={{ lat: 51.505, lng: -0.09 }}
      // zoom={13}
      // scrollWheelZoom={false}
      className="z-10 h-full w-full"
      center={[52.4199, 13.29384]}
      zoom={14}
      scrollWheelZoom={true}
      updateWhenIdle={true}
      updateWhenZooming={true}
      attributionControl={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='<a href="https://www.jawg.io" target="_blank">&copy; Jawg</a> - <a href="https://www.openstreetmap.org" target="_blank">&copy; OpenStreetMap</a>&nbsp;contributors'
        url="https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=oSgJxTHRhnJVijwRqgQ6jSEEAoMUJEMtF23yPKlHqmopcNJyR2xMQTf1Ah6w4eAs"
      />
      <LocationMarker />
    </MapContainer>
    </div>
  );
};

export default TermsOfService;


function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}