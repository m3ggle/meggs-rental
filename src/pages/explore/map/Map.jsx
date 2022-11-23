import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import ExampleData from "../../../ExampleData";
import MapView from "./components/mapView/MapView";
import MobileCatalog from "./components/mobileCatalog/MobileCatalog";
import Preview from "./components/preview/Preview";

const {exampleOffers} = ExampleData()

const Map = () => {
  return (
    <div className="relative h-screen w-full overflow-scroll">
      <MapView offers={exampleOffers} />
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
