import React, { useState } from 'react'
import { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MobileCatalog from '../../../components/catalog/mobileCatalog/MobileCatalog';
import Preview from '../../../components/preview/Preview';
import { useUrlManipulation } from '../../../hooks/urlManipulation/useUrlManipulation';

const Map = () => {
  const [showPreview, setShowPreview] = useState(false)

  const {searchParams, getSingleParam, setSingleParam} = useUrlManipulation()

  useEffect(() => {
    const currentShowPreviewState = getSingleParam("show-preview")
    if (currentShowPreviewState !== showPreview) {
      setShowPreview(currentShowPreviewState)
    }
  }, [searchParams]);

  useEffect(() => {
    setSingleParam("show-preview", false)
  }, [])

  const handleLoad = () => {
    console.log("loaded")
  }

  const handleShowPreview = () => {
    setShowPreview(prevState => !prevState)
  }

  return (
    <div className="relative h-screen w-full overflow-scroll">
      <MapContainer
        className="z-10 h-full w-full"
        center={[51.050407, 13.737262]}
        zoom={13}
        scrollWheelZoom={true}
        updateWhenIdle={true}
        updateWhenZooming={false}
        attributionControl={false}
        zoomControl={false}
        onClick={handleLoad}
      >
        <TileLayer
          attribution='<a href="https://www.jawg.io" target="_blank">&copy; Jawg</a> - <a href="https://www.openstreetmap.org" target="_blank">&copy; OpenStreetMap</a>&nbsp;contributors'
          url="https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=oSgJxTHRhnJVijwRqgQ6jSEEAoMUJEMtF23yPKlHqmopcNJyR2xMQTf1Ah6w4eAs"
          // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          // url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
        />
        <Marker
          eventHandlers={{ click: handleShowPreview }}
          position={[51.050407, 13.737262]}
        >
          {/* <Popup onClick={handleLoad}>DD</Popup> */}
        </Marker>
      </MapContainer>
      <div className='absolute right-7 top-7 w-fit h-fit z-20'>
          <MobileCatalog />
      </div>
      <div className={`${showPreview ? "flex" : "hidden"} absolute left-7 top-7 bottom-7 overflow-scroll w-fit h-[640px] z-20 bg-white max-w-[360px] rounded-xl shadow-xl`}>
        <Preview />
      </div>
    </div>
  );
}

export default Map