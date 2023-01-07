import axios from "axios";
import { useQuery } from "react-query";

const fetchPlanets = () => {
  return axios.get("https://swapi.dev/api/planets/17/");
};

export const useTOSAPI = ({ onSuccessCallback, onErrorCallback }) => {
  return useQuery(["fetch-planets"], fetchPlanets, {
    enabled: false, // does not fetch on mount so we are going to fetch manually
    // after clicking for the first time, the next times it wont be a fetch, it will be a background fetch
    onSuccess: onSuccessCallback,
    onError: onErrorCallback,
  });
};
