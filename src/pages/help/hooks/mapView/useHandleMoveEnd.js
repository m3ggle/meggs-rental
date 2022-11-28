import { useCallback } from "react";
import { useMapContext } from "../../../../context/map/mapContext";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";

export const useHandleMoveEnd = ({ mapRef, setPosition }) => {
  const { dispatchMap } = useMapContext();
  const { setArrayOfParams } = useUrlManipulation();

  const convertBoundsSyntax = (bounds) => {
    return {
      north: bounds["_ne"].lng,
      east: bounds["_ne"].lat,
      south: bounds["_sw"].lng,
      west: bounds["_sw"].lat,
    };
  };

  const handlePreparation = useCallback((mapRef) => {
    const center = mapRef.current.getCenter();
    const zoom = mapRef.current.getZoom();
    const bounds = mapRef.current.getBounds();

    const positionPrep = {
      lat: center.lat,
      lng: center.lng,
      z: zoom,
    };

    return { positionPrep, bounds };
  }, []);

  const setContext = useCallback(
    (bounds, positionPrep) => {
      dispatchMap({
        type: "UPDATE_BOUNDS_AND_POSITION",
        payload: {
          bounds: convertBoundsSyntax(bounds),
          position: { ...positionPrep },
        },
      });
      console.log("dispatching tralala");
    },
    [dispatchMap]
  );

  const handleMoveEnd = useCallback(() => {
    // preparation
    const { positionPrep, bounds } = handlePreparation(mapRef);

    // state update
    setPosition({ ...positionPrep });

    // searchParams update
    setArrayOfParams(positionPrep);

    // context update
    setContext(bounds, positionPrep);
  }, [mapRef, handlePreparation, setPosition, setArrayOfParams, setContext]);

  return { handleMoveEnd, handlePreparation };
};
