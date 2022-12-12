import { useCallback } from "react";
import { useMapCoordContext } from "../../../../context/map/mapCoord/mapCoordContext";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";

export const useHandleMoveEnd = ({ mapRef, setPosition }) => {
  const { dispatchMapCoord } = useMapCoordContext();
  const { setArrayOfParams } = useUrlManipulation();

  const convertBoundsSyntax = (bounds) => {
    return {
      north: bounds["_ne"].lat,
      east: bounds["_ne"].lng,
      south: bounds["_sw"].lat,
      west: bounds["_sw"].lng,
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
      dispatchMapCoord({
        type: "SET_BOUNDS_AND_POSITION",
        payload: {
          bounds: convertBoundsSyntax(bounds),
          position: { ...positionPrep },
        },
      });
    },
    [dispatchMapCoord]
  );

  const handleMoveEnd = useCallback(() => {
    console.log("done flying, preparing")
    // preparation
    const { positionPrep, bounds } = handlePreparation(mapRef);

    // state update
    console.log("setting position to: ", positionPrep);
    setPosition({ ...positionPrep });

    console.log("setting param to: ", positionPrep);
    // searchParams update
    setArrayOfParams(positionPrep);

    console.log("setting context to: ", bounds)
    // context update
    setContext(bounds, positionPrep);
  }, [mapRef, handlePreparation, setPosition, setArrayOfParams, setContext]);

  return { handleMoveEnd, handlePreparation, setContext };
};
