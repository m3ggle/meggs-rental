import { useSearchParams } from "react-router-dom";
import { useSignStateData } from "../hooks/useSignStateData";

export const useMultiStepHelper = () => {
  const { storeDataInState } = useSignStateData();
  let [searchParams, setSearchParams] = useSearchParams();
  const currentRound = +searchParams.get("round");

  const handleStorage = (data, localStorageName) => {
    const localStorageData = JSON.parse(localStorage.getItem(localStorageName));
    const tempData = storeDataInState(data, localStorageData);
    localStorage.setItem(localStorageName, JSON.stringify(tempData));
  };
  const handleContinue = () => {
    const newParam = new URLSearchParams({ round: currentRound + 1 });
    setSearchParams(newParam);
  };
  const handleGoBack = () => {
    if (currentRound !== 1) {
      const newParam = new URLSearchParams({ round: currentRound - 1 });
      setSearchParams(newParam);
    }
  };

  return { handleStorage, handleContinue, handleGoBack };
}