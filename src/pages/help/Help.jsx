import React, { useCallback, useRef, useState } from "react";
import Map, { Marker } from "react-map-gl";
import ExampleData from "../../ExampleData";
import MobileCatalog from "../explore/map/components/mobileCatalog/MobileCatalog";
import Preview from "../explore/map/components/preview/Preview";
import MapView from "./components/MapView";

const { exampleOffers } = ExampleData();

const Help = () => {

  return (
    <div className="h-screen w-full">
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

export default Help;
