import React from 'react'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import MapMarkerList from './MapMarkerList';

const MapView = ({ offers }) => {

  const handleChange = () => console.log("change")
  const handleLoad = () => console.log("loaded")

  return (
    <MapContainer
      className="z-10 h-full w-full"
      center={[52.4199, 13.29384]}
      zoom={14}
      scrollWheelZoom={true}
      updateWhenIdle={true}
      updateWhenZooming={true}
      attributionControl={false}
      zoomControl={false}
      whenReady={handleLoad}
      tap={handleChange}
      

    >
      <TileLayer
        // updateWhenIdle={true}
        attribution='<a href="https://www.jawg.io" target="_blank">&copy; Jawg</a> - <a href="https://www.openstreetmap.org" target="_blank">&copy; OpenStreetMap</a>&nbsp;contributors'
        url="https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=oSgJxTHRhnJVijwRqgQ6jSEEAoMUJEMtF23yPKlHqmopcNJyR2xMQTf1Ah6w4eAs"
      />
      <MapMarkerList offers={offers} />
    </MapContainer>
  );
};

export default MapView