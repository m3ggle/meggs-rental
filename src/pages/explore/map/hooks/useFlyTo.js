import { useEffect } from "react";

export const useFlyTo = ({ flyTo, mapRef, dispatchMap }) => {
  useEffect(() => {
    if (flyTo) {
      mapRef.current.flyTo({
        center: [flyTo.lng, flyTo.lat],
        essential: true,
        zoom: flyTo.z ?? 12,
      });
      dispatchMap({
        type: "FLY",
        payload: false,
      });
    }
  }, [mapRef, flyTo, dispatchMap]);
};
