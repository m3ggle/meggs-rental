import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Btn from "../../components/common/Btn";
import { useDebounce } from "../../hooks/useDebounce";
import { useAnother } from "./hooks/useAnother";
import { useTOSAPI } from "./hooks/useTOSAPI";

// useQuery(uniqueKey, fetchFunction, objectToSpecifyBehavior)

// for basic react query
const fetchStarship = () => {
  return axios.get("https://swapi.dev/api/starships/9/");
};

// for react query on command
const fetchPerson = () => {
  return axios.get("https://swapi.dev/api/people/1/");
};

// polling is the process of (re-)fetching in a regular interval

//

const TermsOfService = () => {
  const { debounce } = useDebounce();

  const onSuccessMsg = (data) => {
    console.log(data);
    console.log("perform sideeffect after data fetching");
  };

  const onErrorMsg = (error) => {
    console.log(error);
    console.log("perform sideeffect after error");
  };

  const { data, isLoading, isError, error } = useQuery(
    ["map-autocomplete"],
    fetchStarship,
    {
      staleTime: 30000, // when the data not often changes (data stays fresh for 30000 before getting stale) (default 0)
      refetchOnMount: true, // every time we come to termsOfService the query will refetch if the data is stale (default true)
      refetchOnWindowFocus: true, // anytime the tab loses focus and regains it, in the background it will refetch the data (default true)
      refetchInterval: 3600000, // query will automatically refetch after 1 hour (polling is pause when the window loses focus but with another config "refetchIntervalInBackground: true" will the polling continue even when the browser loses focus) (default false)
    }
  );

  const {
    data: dataP,
    isLoading: isLoadingP,
    refetch: fetchThePerson,
    isFetching,
  } = useQuery(["fetch-person"], fetchPerson, {
    enabled: false, // does not fetch on mount so we are going to fetch manually
    // after clicking for the first time, the next times it wont be a fetch, it will be a background fetch
    onSuccess: onSuccessMsg,
    onError: onErrorMsg,
    select: (data) => {
      const heroNames = data.data.map((hero) => hero.name);
      return heroNames; // array of heroNames (if data.data is an Array it would work)
    }, // data transformation, changes the return data (dataP) to the one we return here
  });

  const tosaSuccess = (data) =>
    console.log("hook and api works: ", data.data.name);
  const { data: dataPlanet, refetch: refetchPlanet } = useTOSAPI({
    onSuccessCallback: tosaSuccess,
  });

  const anotherSuccess = (data) => console.log("another one: ", data.data.name);
  const { data: specificData, refetch: specificFunc } = useAnother({
    personId: 10,
    onSuccessCallback: anotherSuccess,
  });

  function saveInput(event) {}
  const processChange = debounce(() => saveInput("event"), 2000);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className="flex w-full justify-center gap-x-4 bg-slate-400 py-6">
      <input type="text" onChange={processChange} />
      <div>{data?.data.name}</div>
      <div>{dataP?.data.name}</div>
      <div>as Hook and manual: {dataPlanet?.data.name}</div>
      <div>manual with input: {specificData?.data.name}</div>
      <Btn
        type="button"
        uiType="primary"
        title="Click me to fetch a ship"
        onClick={fetchThePerson}
      />
      <Btn
        type="button"
        uiType="secondary"
        title="Click me to fetch a planet"
        onClick={refetchPlanet}
      />
      <Btn
        type="button"
        uiType="primary"
        title="Specific"
        onClick={specificFunc}
      />
    </div>
  );
};

export default TermsOfService;
