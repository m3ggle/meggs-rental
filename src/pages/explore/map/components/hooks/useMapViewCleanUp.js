import { useEffect } from "react";
import { useMapCoordContext } from "../../../../../context/map/mapCoord/mapCoordContext";
import { useMapSubContext } from "../../../../../context/map/mapSub/mapSubContext";

// clean up
export const useMapViewCleanUp = () => {
    const { dispatchMapSub } = useMapSubContext();
    const { dispatchMapCoord } = useMapCoordContext();

  useEffect(() => {
    return () => {
      dispatchMapCoord({
        type: "SET_POSITION",
        payload: { lat: null, lng: null, z: null },
      });
      dispatchMapSub({
        type: "SET_MAP_LOAD",
        payload: false,
      });
    };
  }, [dispatchMapCoord, dispatchMapSub]);
};
