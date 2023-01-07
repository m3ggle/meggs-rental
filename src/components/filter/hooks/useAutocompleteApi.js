import axios from "axios";
import { useQuery } from "react-query";

const fetchAutocompleteOptions = (value) => {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
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
