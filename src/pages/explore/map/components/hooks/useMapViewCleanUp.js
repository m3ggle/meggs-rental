import { useEffect } from "react";
import { useMapCoordContext } from "../../../../../context/map/mapCoord/mapCoordContext";
import { useMapSubContext } from "../../../../../context/map/mapSub/mapSubContext";
import { useUrlManipulation } from "../../../../../hooks/urlManipulation/useUrlManipulation";

// clean up
export const useMapViewCleanUp = () => {
  const { dispatchMapSub } = useMapSubContext();
  const { dispatchMapCoord } = useMapCoordContext();
  const { getArrayOfParams } = useUrlManipulation();

  useEffect(() => {
    return () => {
      storePositionInLocalStore();

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

  const storePositionInLocalStore = () => {
    const lastPosition = getArrayOfParams(["lng", "lat", "z"]);
    if (lastPosition.lng && lastPosition.lat && lastPosition.z) {
      localStorage.setItem(
        "exploreMapLastPosition",
        JSON.stringify(lastPosition)
      );
    }
  };
};
