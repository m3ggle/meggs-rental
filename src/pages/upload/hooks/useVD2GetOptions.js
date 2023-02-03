import { useQuery } from "react-query";
import supabase from "../../../config/supabaseClient";

export const useVD2GetOptions = () => {
    const getFuelTypes = () => {
      return Promise.all([
        supabase
          .rpc("get_vehicle_category_options")
          .then((response) => response.data),
        supabase
          .rpc("get_vehicle_condition_options")
          .then((response) => response.data),
        supabase
          .rpc("get_vehicle_color_options")
          .then((response) => response.data),
      ]);
    };
    const onError = (error) => console.log(error);

    const { data } = useQuery(["get_options", "category", "condition", "color"], getFuelTypes, {
      staleTime: 600000,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      onError,
    });

    return {
      categories: data === undefined ? [] : data[0],
      conditions: data === undefined ? [] : data[1],
      colors: data === undefined ? [] : data[2],
    };
}