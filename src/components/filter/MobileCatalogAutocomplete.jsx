import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useUrlManipulation } from "../../hooks/urlManipulation/useUrlManipulation";
import { useDebounce } from "../../hooks/useDebounce";
import Autocomplete from "../input/Autocomplete";
import { useAutocompleteApi } from "./hooks/useAutocompleteApi";

const MobileCatalogAutocomplete = ({ control }) => {
  const { getSingleParam, setArrayOfParams, deleteSingleParam, deleteArrayOfParams } = useUrlManipulation();

  const [inputValue, setInputValue] = useState("");
  const [center, setCenter] = useState([])
  const [itemList, setItemList] = useState([]);

  const successFunc = (data) => {
    const tempList = data.data.features.map((feature) => {
      return {
        id: feature.id,
        name: feature.place_name,
        extraInfo: {
          bounds: [
            [feature.bbox[1], feature.bbox[0]],
            [feature.bbox[3], feature.bbox[2]],
          ],
          center: feature.center,
        },
      };
    });
    setItemList(tempList);
  };
  const errorFunc = (data) => console.log("error", data.data);

  const { data, isLoading, error, isError, refetch, isFetching } =
    useAutocompleteApi({
      value: inputValue,
      onSuccessCallback: successFunc,
      onErrorCallback: errorFunc,
    });

  useEffect(() => {
    if (inputValue.length >= 3) {
      refetch();
    }
  }, [inputValue, refetch]);

  const { debounce } = useDebounce();
  const handleInputChange = debounce((e) => setInputValue(e), 800);

  const handleSelect = (callbackObject) => {
    setInputValue(callbackObject.name)
    setCenter(callbackObject.extraInfo.center)
  }

  useEffect(() => {
    if (center.length > 1 && inputValue.length >= 3) {
      const urlPrep = { lon: center[0], lat: center[1], city: inputValue};
      setArrayOfParams(urlPrep);
    } else {
      deleteSingleParam("city");
      // const urlPrep = ["lon", "lat", "city"];
      // deleteArrayOfParams(urlPrep);
    }
  }, [center, setArrayOfParams, deleteArrayOfParams]);

  const handleDelete = () => {
    setInputValue("")
    setItemList([])
    deleteSingleParam("city")
  }

  return (
    <>
      <Controller
        name="city"
        control={control}
        render={({ field, fieldState }) => (
          <Autocomplete
            placeholder="Dresden..."
            value={getSingleParam("city") ? getSingleParam("city") : null}
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

export default MobileCatalogAutocomplete;
