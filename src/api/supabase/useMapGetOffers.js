import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";
import { useMapCoordContext } from "../../context/map/mapCoord/mapCoordContext";
import { useUserContext } from "../../context/user/userContext";

export const useMapGetOffers = () => {
  const [offers, setOffers] = useState([]);
  const { bounds } = useMapCoordContext();
  const { userId } = useUserContext();

  const getOffers = async () => {
    return supabase.rpc("get_offers_by_bbox", { ...bounds, user_id: userId });
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

  const { isLoading, refetch } = useQuery(
    ["get_offers_by_bounds", bounds, userId],
    getOffers,
    {
      enabled: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onSuccess,
      onError,
    }
  );

  //   bounds with debounce
  useEffect(() => {
    const identifier = setTimeout(() => {
      refetch();
      //   }
    }, 1400);

    return () => {
      clearTimeout(identifier);
    };
  }, [bounds]);

  return { offers, isLoading };
};
