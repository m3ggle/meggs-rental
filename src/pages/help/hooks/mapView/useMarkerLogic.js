import { useEffect, useState } from "react";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";

export const useMarkerLogic = () => {
  const [activeMarker, setActiveMarker] = useState();
  const [hoverMarker, setHoverMarker] = useState();

  const { searchParams, getSingleParam } = useUrlManipulation();

  useEffect(() => {
    const currentUrlOfferId = getSingleParam("offerId");
    setActiveMarker(currentUrlOfferId);
    setHoverMarker(undefined);
  }, [searchParams, setActiveMarker, getSingleParam]);

  useEffect(() => {
    const currentUrlOfferId = getSingleParam("hoverId");
    setHoverMarker(currentUrlOfferId);
  }, [searchParams, setHoverMarker, getSingleParam]);

  return { activeMarker, hoverMarker };
};
