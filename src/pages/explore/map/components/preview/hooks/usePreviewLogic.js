import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMapSubContext } from "../../../../../../context/map/mapSub/mapSubContext";
import { useGetOffer } from "../../../../../../hooks/useGetOffer";

export const usePreviewLogic = () => {
  const { getOffer } = useGetOffer("map");
  const navigate = useNavigate();

  const { mapLoaded, activeMarker } = useMapSubContext();

  const [show, setShow] = useState(activeMarker && mapLoaded ? true : false);
  const [offerInformation, setOfferInformation] = useState();

  useEffect(() => {
    const tempShow = activeMarker && mapLoaded ? true : false;

    if (tempShow) {
      setShow(true);

      // const result = getOffer(activeMarker);
      // result ? setOfferInformation(result) : navigate("not-found");
      return;
    }

    // if there is no offerId inside the url and show is true (prevent setting state )
    show && setShow(false);
  }, [navigate, getOffer, show, activeMarker]);

  return { show, offerInformation, setOfferInformation };
};
