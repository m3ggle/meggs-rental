import { useCallback } from "react";
import { useMapContext } from "../context/map/mapContext";

export const useHandleFly = () => {
  const { dispatchMap } = useMapContext();

  const handleFly = useCallback(
    (lng, lat, z) => {
      dispatchMap({
        type: "FLY",
        payload: [lng, lat, z],
      });
    },
    [dispatchMap]
  );

  return { handleFly };
};
