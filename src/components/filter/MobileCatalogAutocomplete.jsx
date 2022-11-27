import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useUrlManipulation } from "../../hooks/urlManipulation/useUrlManipulation";
import { useDebounce } from "../../hooks/useDebounce";
import Autocomplete from "../input/Autocomplete";
import { useAutocompleteApi } from "./hooks/useAutocompleteApi";

const fakeList = [
  {
    id: "123dwe23e12w",
    name: "Dresden, Saxony, Germany",
    extraInfo: {
      bounds: [
        [50.974971, 13.579366],
        [51.177761, 13.966115],
      ],
      center: [13.738144, 51.049329],
    },
  },
  {
    id: "123dwewed23e12w",
    name: "Dresdin, Saxony, Germany",
    extraInfo: {
      bounds: [
        [50.974971, 13.579366],
        [51.177761, 13.966115],
      ],
      center: [13.738144, 51.049329],
    },
  },
  {
    id: "12323e12w",
    name: "Drestan, Saxony, Germany",
    extraInfo: {
      bounds: [
        [50.974971, 13.579366],
        [51.177761, 13.966115],
      ],
      center: [13.738144, 51.049329],
    },
  },
];

const MobileCatalogAutocomplete = ({ control }) => {
  const { setArrayOfParams, deleteArrayOfParams } = useUrlManipulation();

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
    if (center.length > 1) {
      const urlPrep = { lon: center[0], lat: center[1], city: inputValue};
      setArrayOfParams(urlPrep);
    } else {
      const urlPrep = ["lon", "lat", "city"];
      deleteArrayOfParams(urlPrep);
    }
  }, [center, setArrayOfParams, deleteArrayOfParams]);

  return (
    <>
      <Controller
        name="city"
        control={control}
        render={({ field, fieldState }) => (
          <Autocomplete
            placeholder="Dresden..."
            value={field.value}
            itemList={itemList}
            onChange={(callbackObject) => {
              field.onChange(callbackObject.name);
              handleInputChange(callbackObject.name);
              handleSelect(callbackObject);
            }}
            onBlur={field.onBlur}
            onInputChange={handleInputChange}
            error={fieldState.error}
          />
        )}
      />
    </>
  );
};

export default MobileCatalogAutocomplete;
