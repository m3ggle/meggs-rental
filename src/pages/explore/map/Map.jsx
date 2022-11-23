import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import MobileCatalog from "./components/mobileCatalog/MobileCatalog";
import Preview from "./components/preview/Preview";

const Map = () => {
  return (
    <div className="relative h-screen w-full overflow-scroll">
      <MapContainer
        className="z-10 h-full w-full"
        center={[51.050407, 13.737262]}
        zoom={13}
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
        <Marker
          // eventHandlers={{ click: handleShowPreview }}
          position={[51.050407, 13.737262]}
        ></Marker>
      </MapContainer>
      <div className="absolute right-7 top-7 z-20 h-fit w-fit">
        <MobileCatalog />
      </div>
      <div className="absolute left-7 top-7 bottom-7 z-20 flex h-[640px] w-fit max-w-[360px] overflow-scroll rounded-xl bg-white shadow-xl">
        <Preview />
      </div>
    </div>
  );
};

export default Map;
