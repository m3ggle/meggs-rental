import { useSearchParams } from "react-router-dom";

export const useUrlManipulation = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  // setting
  const setIndividualParam = (desiredParam, desiredValue) => {
    searchParams.set(desiredParam, desiredValue);
    setSearchParams(searchParams);
  };
  const setArrayOfParams = () => {};

  // getting
  const getIndividualParam = (desiredParam) => {
    return searchParams.get(desiredParam);
  };
  const getArrayOfParams = () => {};

  // delete
  const deleteIndividualParam = (desiredParam) => {
    searchParams.delete(desiredParam);
    setSearchParams(searchParams);
  };
  const deleteAllParams = () => {};
  const deleteArrayOfParams = () => {};

  // handle (more compplex)

  return { setIndividualParam };
};
