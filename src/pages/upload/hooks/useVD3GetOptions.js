import { useQuery } from "react-query";
import supabase from "../../../config/supabaseClient";

export const useVD3GetOptions = () => {
  const getColors = async () => {
    return supabase
        .rpc("get_vehicle_color_options")
        .then((response) => response.data)
  };
  const onError = (error) => console.log(error);

  const { data } = useQuery(["get_options", "color"], getColors, {
    staleTime: 600000,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    onError,
  });

  return {
    colors: data === undefined ? [] : data,
  };
};
