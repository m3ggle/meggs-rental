import { useEffect } from "react";
import { useMapCoordContext } from "../../../../../context/map/mapCoord/mapCoordContext";
import { useMapSubContext } from "../../../../../context/map/mapSub/mapSubContext";

export const useCheckExternalChanges = ({ setPosition }) => {
  const { mapLoaded } = useMapSubContext();
  const { externalPositionChange } = useMapCoordContext();

  useEffect(() => {
    if (externalPositionChange !== null && mapLoaded) {
      console.log("i guess, my mistake");
      setPosition({ ...externalPositionChange });
    }
  }, [externalPositionChange, setPosition, mapLoaded]);
};
