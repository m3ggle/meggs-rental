import { useCallback } from "react";
import { useMapSubContext } from "../context/map/mapSub/mapSubContext";

export const useHandleFly = () => {
  const { dispatchMapSub } = useMapSubContext();

  const handleFly = useCallback(
    (lng, lat, z) => {
      console.log("fly to: ", {lng, lat, z});
      dispatchMapSub({
        type: "FLY",
        payload: { lng, lat, z: z ?? 12 },
      });
    },
    [dispatchMapSub]
  );

  return { handleFly };
};
