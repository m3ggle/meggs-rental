import { useSearchParams } from "react-router-dom";

export const useUrlManipulation = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  // setting
  const setSingleParam = (desiredParam = "", desiredValue) => {
    searchParams.set(desiredParam, desiredValue);
    setSearchParams(searchParams);
  };
  const setArrayOfParams = (desiredParams = {}) => {
    const newParams = new URLSearchParams(desiredParams);
    setSearchParams(newParams);
  };

  // getting
  const getSingleParam = (desiredParam = "") => {
    return searchParams.get(desiredParam);
  };
  const getArrayOfParams = (desiredAParams = []) => {
    let paramsAsObject = {};
    desiredAParams.map((param) => {
      paramsAsObject[param] = searchParams.get(param);
    });
    return paramsAsObject;
  };

  // delete
  const deleteSingleParam = (desiredParam) => {
    searchParams.delete(desiredParam);
    setSearchParams(searchParams);
  };
  const deleteArrayOfParams = () => {};
    const deleteAllParams = () => {
      searchParams.forEach((val, key) => searchParams.delete(key))
      setSearchParams(searchParams)
    };

  // handle (more compplex)

  return {
    setSingleParam,
    setArrayOfParams,
    getSingleParam,
    getArrayOfParams,
    deleteSingleParam,
    deleteAllParams,
  };
};
