import { useCallback, useEffect } from "react";
import { useMapCoordContext } from "../../../../../context/map/mapCoord/mapCoordContext";
import { useUserContext } from "../../../../../context/user/userContext";

// mainly for setting the state position

export const useMapViewInit = ({ setPosition }) => {
  const { externalPositionChange, dispatchMapCoord } = useMapCoordContext();
  const { userId, preferredCity } = useUserContext();

  useEffect(() => {
    // if anything is inside externalPositionChange ctx
    if (externalCondition()) {
      handleExternal();
      return;
    }

    // look in localStorage
    if (localStorage.getItem("exploreMapLastPosition") !== null) {
      handleLocalStorage();
      return;
    }

    // look in userProfile
    if (userId !== null) {
      handlePreferredCity();
      return
    }

    // use default
    handleDefault();
  }, []);

  const externalCondition = useCallback(() => {
    if (
      externalPositionChange?.lng &&
      externalPositionChange?.lat &&
      externalPositionChange?.z
    ) {
      return true;
    }
    return false;
  }, [externalPositionChange]);

  const setPositionHelper = useCallback(
    (positionObject) => {
      setPosition({
        latitude: positionObject.lat,
        longitude: positionObject.lng,
        zoom: positionObject.z,
      });
    },
    [setPosition]
  );

  const handlePreferredCity = () => {
    setPositionHelper({
      lat: preferredCity.coordinates.center.latitude,
      lng: preferredCity.coordinates.center.longitude,
      z: 12,
    });
  };

  const handleExternal = useCallback(() => {
    setPositionHelper(externalPositionChange);
    dispatchMapCoord({
      type: "SET_EXTERNAL_POSITION_CHANGES",
      payload: null,
    });
  }, [setPositionHelper, dispatchMapCoord, externalPositionChange]);

  const handleLocalStorage = useCallback(() => {
    let positionInLocalStorage = localStorage.getItem("exploreMapLastPosition");
    positionInLocalStorage = JSON.parse(positionInLocalStorage);
    setPositionHelper(positionInLocalStorage);
  }, [setPositionHelper]);

  const handleDefault = useCallback(() => {
    setPositionHelper({ lat: 52.4199, lng: 13.29384, z: 14 });
  }, [setPositionHelper]);
};
