import axios from "axios";
import { useQuery } from "react-query";

const fetchPerson = (personId) => {
  return axios.get(`https://swapi.dev/api/people/${personId}/`);
};

export const useAnother = ({
  personId,
  onSuccessCallback,
  onErrorCallback,
}) => {
  return useQuery(["fetch-person", personId], () => fetchPerson(personId), {
    // have to put in personId otherwise useQuery would use the cache values if there is a key overlap
    // eg if we call this hook multiple times, but with different personId's, useQuery would use the cache if we do not include it inside the key array
    enabled: false,
    onSuccess: onSuccessCallback,
    onError: onErrorCallback,
  });
};
