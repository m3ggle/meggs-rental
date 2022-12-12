import { useState } from "react";

export const useStaticMapInformation = () => {
      const MAPBOX_TOKEN =
        "pk.eyJ1IjoibTFnZ2xlIiwiYSI6ImNsYXVtaHM0ejA1eTgzdm1wMmRkaDBnNDAifQ.ayNDhREPUzI4mBOyVjor6A";
    
    const [staticState] = useState({
        style: { width: "100%", height: "100%" },
        mapStyle: "mapbox://styles/m1ggle/clavbv34v006214nkabl8az22",
        mapboxAccessToken: MAPBOX_TOKEN,
    });
    
    return {staticState}
}