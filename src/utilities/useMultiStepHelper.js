import { useSearchParams } from "react-router-dom";

export const useMultiStepHelper = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const currentRound = +searchParams.get("round");

  const handleGoogle = () => {
    // Todo: localStorage
    searchParams.set("round", currentRound + 2);
    setSearchParams(searchParams.toString());
  };
  
  const handleStorage = (data, localStorageName) => {
    const localStorageData = JSON.parse(localStorage.getItem(localStorageName));
    let newLocalStorage = localStorageData ?? {};
    Object.entries(data).map((item) => {
      newLocalStorage[item[0]] = item[1];
    });
    localStorage.setItem(localStorageName, JSON.stringify(newLocalStorage));
  };

  const handleContinue = () => {
    searchParams.set("round", currentRound + 1);
    setSearchParams(searchParams.toString());
  };
  
  const handleGoBack = () => {
    if (currentRound !== 1) {
      searchParams.set("round", currentRound - 1);
      setSearchParams(searchParams);
    }
  };

  // special kinds
  // sign up
  const handleEmailContinue = (data) => {
    handleStorage(data, "signUpData");
    searchParams.set("email", data.email);
    searchParams.set("round", currentRound + 1);
    setSearchParams(searchParams.toString());
  };
  const handleConfirmationContinue = (data) => {
    data.email = searchParams.get("email");
    console.log(data);
    handleStorage(data, "signUpData");
    handleContinue();
  };

  return {
    handleStorage,
    handleContinue,
    handleGoBack,
    handleGoogle,
    handleEmailContinue,
    handleConfirmationContinue,
  };
};
