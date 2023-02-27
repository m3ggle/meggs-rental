import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { filterMapboxResponseCity } from "../../helpers/filterMapboxResponse";
import { formatPlaceName } from "../../helpers/placeNameToObject";
import { useUrlManipulation } from "../../hooks/urlManipulation/useUrlManipulation";
import { useDebounce } from "../../hooks/useDebounce";
import { useHandleFly } from "../../hooks/useHandleFly";
import Autocomplete from "../input/autocomplete/Autocomplete";
import { useAutocompleteApi } from "./hooks/useAutocompleteApi";

// too many renders
const MobileCatalogAutocomplete = ({
  value = null,
  label,
  control,
  definedActions = "mapCatalog",
  callbackFunction,
}) => {
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
      return filterMapboxResponseCity(data);
    }
  };

  const errorFunc = (data) => console.log("error", data.data);

  const { isLoading, refetch } = useAutocompleteApi({
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
            label={label ?? undefined}
            // value={getSingleParam("city") ? getSingleParam("city") : null}
            value={
              value
                ? value
                : getSingleParam("city")
                ? getSingleParam("city")
                : null
            }
            itemList={itemList}
            onSelect={(callbackObject) => {
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