import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export const useUrlManipulation = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  // setting
  const setSingleParam = useCallback(
    (desiredParam = "", desiredValue) => {
      searchParams.set(desiredParam, desiredValue);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );
  const setArrayOfParams = useCallback(
    (desiredParams = {}) => {
      const allParams = getAllParams();
      for (const [key, value] of Object.entries(desiredParams)) {
        allParams[key] = value;
      }
      setSearchParams(allParams);
    },
    [setSearchParams]
  );

  // getting
  const getSingleParam = useCallback(
    (desiredParam = "") => {
      return searchParams.get(desiredParam);
    },
    [searchParams]
  );
  const getArrayOfParams = useCallback(
    (desiredAParams = []) => {
      let paramsAsObject = {};
      desiredAParams.map((param) => {
        paramsAsObject[param] = getSingleParam(param);
      });
      return paramsAsObject;
    },
    [getSingleParam]
  );
  const getAllParams = useCallback(() => {
    let tempHolder = {};
    for (const [key, value] of searchParams.entries()) {
      tempHolder[key] = value;
    }
    return tempHolder;
  }, [searchParams]);

  // delete
  const deleteSingleParam = useCallback(
    (desiredParam) => {
      searchParams.delete(desiredParam);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );
  const deleteArrayOfParams = useCallback((desiredParams = []) => {
    console.log("annoyed")
    desiredParams.map((key) => searchParams.delete(key));
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams])
  const deleteAllParams = useCallback(() => {
    searchParams.forEach((val, key) => searchParams.delete(key));
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return {
    searchParams,
    setSingleParam,
    setArrayOfParams,
    getSingleParam,
    getArrayOfParams,
    getAllParams,
    deleteSingleParam,
    deleteArrayOfParams,
    deleteAllParams,
  };
};
