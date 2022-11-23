import React from "react";
import { Marker } from "react-leaflet";
import { useUrlManipulation } from "../../../../../hooks/urlManipulation/useUrlManipulation";

const MapMarkerList = ({ offers }) => {
  const { setSingleParam } = useUrlManipulation();
  const handleMarkerClick = (id) => setSingleParam("offerId", id);

  return (
    <>
      {offers.map((offer) => (
        <Marker
          key={offer.offerId}
          eventHandlers={{ click: () => handleMarkerClick(offer.offerId) }}
          position={[offer.location.lat, offer.location.lon]}
        />
      ))}
    </>
  );
};

export default MapMarkerList;
