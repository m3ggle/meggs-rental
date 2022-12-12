import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useMapCoordContext } from "../../context/map/mapCoord/mapCoordContext";
import { useUrlManipulation } from "../../hooks/urlManipulation/useUrlManipulation";
import { useDebounce } from "../../hooks/useDebounce";
import { useHandleFly } from "../../hooks/useHandleFly";
import Autocomplete from "../input/Autocomplete";
import { useAutocompleteApi } from "./hooks/useAutocompleteApi";

// too many renders
const MobileCatalogAutocomplete = ({ control, definedActions }) => {
  definedActions = definedActions ?? "mapCatalog";
  let locationPathname = useLocation().pathname;

  const {
    getSingleParam,
    deleteSingleParam,
  } = useUrlManipulation();

  const { handleFly } = useHandleFly();

  const [inputValue, setInputValue] = useState("");
  const [itemList, setItemList] = useState([]);

  const successFunc = (data) => {
    setItemList(filterDistributor(data));

    // const filteredList = data.data.features.filter(
    //   (feature) =>
    //     feature.id && feature.place_name && feature.center && feature.bbox
    // );

    // const tempList = filteredList.map((feature) => {
    //   return {
    //     id: feature.id,
    //     name: feature.place_name,
    //     extraInfo: {
    //       bounds: [
    //         [feature.bbox[1], feature.bbox[0]],
    //         [feature.bbox[3], feature.bbox[2]],
    //       ],
    //       center: feature.center,
    //     },
    //   };
    // });

    // setItemList(tempList);
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
          bounds: [
            [feature.bbox[1], feature.bbox[0]],
            [feature.bbox[3], feature.bbox[2]],
          ],
          center: feature.center,
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
    decideSelectAction(callbackObject)
  };

  const decideSelectAction = (callbackObject) => {
    console.log(callbackObject);

    // autocomplete in: mobileCatalog or filterModal and page: map (city)
    if (
      definedActions === "mapCatalog" &&
      locationPathname === "/explore/map"
    ) {
      handleFly(
        callbackObject.extraInfo.center[0],
        callbackObject.extraInfo.center[1]
      );
      return;
    }

    // Todo: autocomplete in: mobileCatalog and page: map (search)
    // Todo: autocomplete in: filter and page: catalog (search)
  };

  // useEffect(() => {
  //   if (center.length > 1 && inputValue.length >= 3) {
  //     const urlPrep = { lng: center[0], lat: center[1] };
  //     setArrayOfParams(urlPrep);
  //     return;
  //   }
  //   deleteSingleParam("city");
  // }, [center, setArrayOfParams, deleteArrayOfParams]);

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
