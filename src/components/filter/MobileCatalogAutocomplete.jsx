import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useUrlManipulation } from "../../hooks/urlManipulation/useUrlManipulation";
import { useDebounce } from "../../hooks/useDebounce";
import { useHandleFly } from "../../hooks/useHandleFly";
import Autocomplete from "../input/Autocomplete";
import { useAutocompleteApi } from "./hooks/useAutocompleteApi";

// too many renders
const MobileCatalogAutocomplete = ({
  control,
  definedActions,
  callbackFunction,
}) => {
  definedActions = definedActions ?? "mapCatalog";
  let locationPathname = useLocation().pathname;

  const { getSingleParam, deleteSingleParam } = useUrlManipulation();

  const { handleFly } = useHandleFly();

  const [inputValue, setInputValue] = useState("");
  const [itemList, setItemList] = useState([]);

  const successFunc = (data) => {
    setItemList(filterDistributor(data));
  };

  const filterDistributor = (data) => {
    if (definedActions === "mapCatalog") {
      return mapCatalogFilter(data);
    }
  };

  const mapCatalogFilter = (data) => {
    const filteredList = data.data.features.filter(
      (feature) =>
        feature.id && feature.place_name && feature.center && feature.bbox
    );

    const tempList = filteredList.map((feature) => {
      return {
        id: feature.id,
        name: feature.place_name,
        extraInfo: {
          bounds: {
            north: feature.bbox[3],
            east: feature.bbox[2],
            south: feature.bbox[1],
            west: feature.bbox[0],
          },
          center: {
            lat: feature.center[1],
            lng: feature.center[0],
          },
        },
      };
    });

    return tempList;
  };

  // Todo: setItemList to error in other words display the error in the autocomplete results
  const errorFunc = (data) => console.log("error", data.data);

  const { data, isLoading, error, isError, refetch, isFetching } =
    useAutocompleteApi({
      definedActions,
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
    setInputValue(callbackObject.name);
    decideSelectAction(callbackObject);
  };

  const decideSelectAction = (callbackObject) => {
    console.log(callbackObject);

    // autocomplete in: mobileCatalog or filterModal and page: map (city)
    if (
      definedActions === "mapCatalog" &&
      locationPathname === "/explore/map"
    ) {
      handleFly(
        callbackObject.extraInfo.center.lng,
        callbackObject.extraInfo.center.lat
      );
      return;
    }

    if (definedActions === "mapCatalog" && callbackFunction) {
      callbackFunction(callbackObject);
    }

    // Todo: autocomplete in: mobileCatalog and page: map (search)
    // Todo: autocomplete in: filter and page: catalog (search)
  };

  const handleDelete = () => {
    setInputValue("");
    setItemList([]);
    deleteSingleParam("city");
  };

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
