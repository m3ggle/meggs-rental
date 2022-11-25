// import ReactMapboxGl from "react-mapbox-gl";
import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef, useState } from "react";

const TermsOfService = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/m1ggle/clavbv34v006214nkabl8az22",
      center: [lng, lat],
      zoom: zoom,
      accessToken:
        "pk.eyJ1IjoibTFnZ2xlIiwiYSI6ImNsYXVtaHM0ejA1eTgzdm1wMmRkaDBnNDAifQ.ayNDhREPUzI4mBOyVjor6A",
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize (if not map init, leave)
    map.current.on("moveend", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
      console.log(map.current.getBounds());
    });
  });

  return (
    <div className="h-screen w-full">
      <div ref={mapContainer} className="h-full w-full"></div>
    </div>
  );
};

export default TermsOfService;
