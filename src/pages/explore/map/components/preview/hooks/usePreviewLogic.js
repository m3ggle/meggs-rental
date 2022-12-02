import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMapCoordContext } from "../../../../../../context/map/mapCoord/mapCoordContext";
import { useUrlManipulation } from "../../../../../../hooks/urlManipulation/useUrlManipulation";
import { useGetOffer } from "../../../../../../hooks/useGetOffer";

export const usePreviewLogic = () => {
  const { searchParams, getSingleParam } = useUrlManipulation();
  const { getOffer } = useGetOffer("map");
  const navigate = useNavigate();

  const { mapLoaded } = useMapCoordContext();

  const [show, setShow] = useState(
    getSingleParam("offerId") && mapLoaded ? true : false
  );
  const [offerInformation, setOfferInformation] = useState();

  useEffect(() => {
    const tempShow = getSingleParam("offerId") && mapLoaded ? true : false;

    if (tempShow) {
      setShow(true);

      const result = getOffer(getSingleParam("offerId"));
      result ? setOfferInformation(result) : navigate("not-found");
      return;
    }

    // if there is no offerId inside the url and show is true (prevent setting state )
    show && setShow(false);
  }, [searchParams, getSingleParam, navigate, getOffer, show]);

  return { show, offerInformation, setOfferInformation };
};
