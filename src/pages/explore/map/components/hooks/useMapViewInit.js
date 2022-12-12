import { useEffect } from "react";
import { useMapCoordContext } from "../../../../../context/map/mapCoord/mapCoordContext";
import { useUrlManipulation } from "../../../../../hooks/urlManipulation/useUrlManipulation";

export const useMapViewInit = ({ setPosition }) => {
  const { externalPositionChange, dispatchMapCoord } = useMapCoordContext();
  const { setArrayOfParams } = useUrlManipulation();

  useEffect(() => {
    // mapView init

    // if anything is inside externalPositionChange ctx
    if (
      externalPositionChange?.lng &&
      externalPositionChange?.lat &&
      externalPositionChange?.z
    ) {
      setArrayOfParams({
        lat: externalPositionChange.lat,
        lng: externalPositionChange.lng,
        z: externalPositionChange.z,
      });
      setPosition({
        latitude: externalPositionChange.lat,
        longitude: externalPositionChange.lng,
        zoom: externalPositionChange.z,
      });
      dispatchMapCoord({
        type: "SET_EXTERNAL_POSITION_CHANGES",
        payload: null,
      });
      return;
    }
    // look in localStorage

    // look in userProfile

    // use default
    setPosition({
      latitude: 52.4199,
      longitude: 13.29384,
      zoom: 14,
    });
  }, []);
};
