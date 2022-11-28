import { useCallback } from "react";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";
import { useHandleMoveEnd } from "./useHandleMoveEnd";

export const useHandleMapInit = (mapRef) => {
  const { setArrayOfParams, getArrayOfParams } = useUrlManipulation();
  const { handlePreparation } = useHandleMoveEnd();

  const handleInit = useCallback(() => {
    const currentSearchParams = getArrayOfParams(["lat", "lng", "z"]);
    const amountOfNulls = Object.values(currentSearchParams).filter(
      (value) => value === null
    );
    if (amountOfNulls.length > 0) {
      const { positionPrep } = handlePreparation(mapRef);
      setArrayOfParams({ ...positionPrep });
    }
  }, [setArrayOfParams, getArrayOfParams, handlePreparation, mapRef]);
    
    return {handleInit}
};
