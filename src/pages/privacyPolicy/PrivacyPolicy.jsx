import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Btn from "../../components/common/Btn";
import AutocompleteWrapperCity from "../../components/wrapper/AutocompleteWrapperCity";
import supabase from "../../config/supabaseClient";

const PrivacyPolicy = () => {
  const getFuelTypes = () => {
    return Promise.all([
      supabase
        .rpc("get_vehicle_fuel_type_options")
        .then((response) => response.data),
      supabase
        .rpc("get_vehicle_transmission_options")
        .then((response) => response.data),
    ]);
  }
  const onSuccess = (data) => console.log(data)
  const onError = (error) => console.log(error)
  
  const { data, isLoading } = useQuery(
    ["get_vehicle_fuel_type_options"],
    getFuelTypes,
    {
      staleTime: 600000,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      onSuccess,
      onError
    }
  );

  console.log(data)

  const handleClick = async () => { };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-2">
      <div className="h-fit w-fit">
        <Btn
          title="Click Me"
          type="button"
          uiType="primary"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
