import { useNavigate } from "react-router-dom";
import { useMapCoordContext } from "../../context/map/mapCoord/mapCoordContext";
import { useMapSubContext } from "../../context/map/mapSub/mapSubContext";

export const useHandleLocationNavigation = () => {
  const navigate = useNavigate();
  const { dispatchMapCoord } = useMapCoordContext();
  const { dispatchMapSub } = useMapSubContext();

  const handleLocationNavigation = (offerId, location) => {
    const positionPrep = {
      lat: location.lat,
      lng: location.lng,
      z: 14,
    };

    const nextParams = new URLSearchParams(positionPrep);

    dispatchMapCoord({
      type: "SET_EXTERNAL_POSITION_CHANGES",
      payload: { ...positionPrep },
    });
    dispatchMapSub({ type: "UPDATE_ACTIVE_MARKER", payload: offerId });
    navigate(`/explore/map?${nextParams}`);
  };

  return { handleLocationNavigation };
};
