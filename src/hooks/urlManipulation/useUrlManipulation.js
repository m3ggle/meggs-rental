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
  const getAllParams = () => {
    let tempHolder = {};
    for (const [key, value] of searchParams.entries()) {
      tempHolder[key] = value;
    }
    return tempHolder;
  };

  // delete
  const deleteSingleParam = (desiredParam) => {
    searchParams.delete(desiredParam);
    setSearchParams(searchParams);
  };
  const deleteArrayOfParams = () => {};
  const deleteAllParams = () => {
    searchParams.forEach((val, key) => searchParams.delete(key));
    setSearchParams(searchParams);
  };

  // handle (more compplex)

  return {
    setSingleParam,
    setArrayOfParams,
    getSingleParam,
    getArrayOfParams,
    getAllParams,
    deleteSingleParam,
    deleteAllParams,
  };
};
