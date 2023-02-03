import { useQuery } from "react-query";
import supabase from "../../../config/supabaseClient";

export const useVD1GetOptions = () => {
      const getFuelTypes = () => {
        return Promise.all([
          supabase
            .rpc("get_vehicle_fuel_type_options")
            .then((response) => response.data),
          supabase
            .rpc("get_vehicle_transmission_options")
            .then((response) => response.data),
        ]);
      };
      const onError = (error) => console.log(error);

      const { data } = useQuery(
        ["get_options", "fuel_type", "transmission"],
        getFuelTypes,
        {
          staleTime: 600000,
          refetchOnMount: true,
          refetchOnWindowFocus: false,
          onError,
        }
      );
    
    return {
      fuelTypes: data === undefined ? [] : data[0],
      transmissions: data === undefined ? [] : data[1],
    };
}