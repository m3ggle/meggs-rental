import { useCallback } from "react";
import { useMapCoordContext } from "../../../../context/map/mapCoord/mapCoordContext";
import { useMapSubContext } from "../../../../context/map/mapSub/mapSubContext";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";
import { useHandleMoveEnd } from "./useHandleMoveEnd";

export const useHandleMapInit = (mapRef) => {
  const { setArrayOfParams, getArrayOfParams } = useUrlManipulation();
  const { handlePreparation, setContext } = useHandleMoveEnd({
    mapRef,
  });
  const { dispatchMapSub } = useMapSubContext();

  // 1. set the context of mapLoaded to true
  // 2. set url params
  const handleInit = useCallback(() => {
    dispatchMapSub({ type: "SET_MAP_LOAD", payload: true });
    
    const { positionPrep, bounds } = handlePreparation(mapRef);
    setArrayOfParams(positionPrep);
    setContext(bounds, positionPrep);
  
  }, [setArrayOfParams, getArrayOfParams, handlePreparation, mapRef]);

  return { handleInit };
};
