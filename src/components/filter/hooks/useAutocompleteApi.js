import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAutocompleteOptions = (value) => {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoibTFnZ2xlIiwiYSI6ImNsYXVtaHM0ejA1eTgzdm1wMmRkaDBnNDAifQ.ayNDhREPUzI4mBOyVjor6A";
  return axios.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?limit=5&types=place&autocomplete=true&access_token=${MAPBOX_TOKEN}`
  );
};

export const useAutocompleteApi = ({
  definedActions,
  value,
  onSuccessCallback,
  onErrorCallback,
}) => {
  return useQuery(
    ["fetch-autocomplete-options", value],
    () => decideWhichApi(definedActions, value),
    {
      enabled: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onSuccess: onSuccessCallback,
      onError: onErrorCallback,
    }
  );
};

const decideWhichApi = (definedActions, value) => {
  if (definedActions === "mapCatalog") {
    return fetchAutocompleteOptions(value);
  }
};
