import React from "react";
import { Marker, useMapEvents } from "react-leaflet";
import { useUrlManipulation } from "../../../../../hooks/urlManipulation/useUrlManipulation";

const MapMarkerList = ({ offers }) => {
  const { setSingleParam } = useUrlManipulation();
  const handleMarkerClick = (id) => setSingleParam("offerId", id);

    const map = useMapEvents({
      click() {
        console.log("getCenter", map.getCenter());
        console.log("getZoom", map.getZoom());
        console.log("locate", map.locate());
        console.log("bounds", map.getBounds())
        // map.containerPointToLatLng();
      },
      dragend() {
        console.log(map.getCenter())
      },

    });

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
