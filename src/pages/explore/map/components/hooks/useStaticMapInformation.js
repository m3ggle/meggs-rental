import { useState } from "react";

export const useStaticMapInformation = () => {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

  const [staticState] = useState({
    style: { width: "100%", height: "100%" },
    mapStyle: "mapbox://styles/m1ggle/clavbv34v006214nkabl8az22",
    mapboxAccessToken: MAPBOX_TOKEN,
    willReadFrequently: true,
  });

  return { staticState };
};
