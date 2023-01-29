import { useState } from "react";
import { useQuery } from "react-query";
import { useMapCoordContext } from "../../../../context/map/mapCoord/mapCoordContext";

export const useMapGetOffers = () => {
  const [offers, setOffers] = useState([]);
  const { bounds } = useMapCoordContext();

  const getOffers = () => {
    console.log("calling supabase");
    // return supabase.rpc("get_offers_by_bbox", bounds);
    return { error: null, data: null };
  };

  const onSuccess = (responseObj) => {
    const { data, error } = responseObj;
    if (error !== null) {
      console.log("call was successful but there is an error", error);
      return;
    }
    if (data === null) {
      setOffers([]);
      return;
    }
    setOffers(data);
  };

  const onError = (error) => {
    console.log("this is an error", error);
  };

  const { isLoading } = useQuery(["get_offers_by_bounds", bounds], getOffers, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    onSuccess,
    onError,
  });

  return { offers, isLoading };
};
