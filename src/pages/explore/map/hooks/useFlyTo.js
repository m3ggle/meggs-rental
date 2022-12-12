import { useEffect } from "react";
import { useMapSubContext } from "../../../../context/map/mapSub/mapSubContext";
// hook for map
export const useFlyTo = ({ mapRef }) => {
  const { flyTo, dispatchMapSub } = useMapSubContext();
  
  useEffect(() => {
    if (flyTo) {
      console.log("i'm flying: ", flyTo)
      mapRef.current.flyTo({
        center: [flyTo.lng, flyTo.lat],
        essential: true,
        zoom: flyTo.z ?? 12,
      });
      dispatchMapSub({
        type: "FLY",
        payload: false,
      });
    }
  }, [mapRef, flyTo, dispatchMapSub]);
};
