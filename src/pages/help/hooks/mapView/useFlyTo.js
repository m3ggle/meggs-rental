import { useEffect } from "react";

export const useFlyTo = ({ flyTo, mapRef, dispatchMap }) => {
  useEffect(() => {
    if (flyTo) {
      console.log(flyTo);
      mapRef.current.flyTo({
        center: [flyTo[0], flyTo[1]],
        essential: true,
        zoom: flyTo[2] ?? 12,
      });
      dispatchMap({
        type: "FLY",
        payload: false,
      });
    }
  }, [mapRef, flyTo, dispatchMap]);
};
