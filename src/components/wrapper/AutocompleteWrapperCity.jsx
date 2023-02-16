import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { useQuery } from "react-query";
import { filterMapboxResponseStreet } from "../../helpers/filterMapboxResponse";
import Autocomplete from "../input/Autocomplete";

const AutocompleteWrapperCity = ({ control, label, value, callback }) => {
  const [inputValue, setInputValue] = useState("");
  const [itemList, setItemList] = useState([]);

  // component functions
  const handleSelect = (data) => callback(data);
  const handleInputChange = (e) => setInputValue(e);
  const handleDelete = () => {
    setInputValue("");
    setItemList([]);
  };

  // api call functions
  const getCities = () =>
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${inputValue}.json?proximity=ip&types=address&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
    ).then((response) => response.json());
  const onSuccess = (data) => setItemList(filterMapboxResponseStreet(data));
  const onError = (error) => {
    console.log("error", error);
    setItemList([]);
  };

  // react query
  const { isLoading, refetch } = useQuery(
    ["mapbox_city", inputValue],
    getCities,
    {
      enabled: false,
      staleTime: 120000,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onSuccess,
      onError,
    }
  );

  // debounce useEffect
  useEffect(() => {
    const handler = setTimeout(() => {
      console.log("refetching");
      if (inputValue.length > 3) {
        refetch(inputValue);
      }
    }, 800);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  return (
    <>
      <Controller
        name="city"
        control={control}
        render={({ field, fieldState }) => (
          <Autocomplete
            placeholder="Dresden..."
            label={label ?? undefined}
            value={value ?? null}
            itemList={itemList}
            onChange={(callbackObject) => {
              field.onChange(callbackObject.name);
              handleInputChange(callbackObject.name);
              handleSelect(callbackObject);
            }}
            isLoading={isLoading}
            onBlur={field.onBlur}
            onDelete={handleDelete}
            onInputChange={handleInputChange}
            error={fieldState.error}
          />
        )}
      />
    </>
  );
};

export default AutocompleteWrapperCity;
