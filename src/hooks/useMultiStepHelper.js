import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toastNotify } from "../components/toastNotify/toastNotify";
import { auth, db } from "../firebase.config";
import { useUrlManipulation } from "./urlManipulation/useUrlManipulation";

export const useMultiStepHelper = () => {
  // mandatory
  const { searchParams, setSingleParam, setArrayOfParams, getSingleParam } =
    useUrlManipulation();
  const currentRound = getSingleParam("round") ? +getSingleParam("round") : 1;

  const locationPathname = useLocation().pathname;

  useEffect(() => {
    if (locationPathname !== "/sign-in") {
      !getSingleParam("round") && setSingleParam("round", 1);
    }
  }, [searchParams]);

  // all functions
  const handleStorage = (data, localStorageName) => {
    const localStorageData = JSON.parse(localStorage.getItem(localStorageName));
    let newLocalStorage = localStorageData ?? {};
    Object.entries(data).map((item) => {
      console.log(item[1]);
      newLocalStorage[item[0]] = item[1];
    });
    localStorage.setItem(localStorageName, JSON.stringify(newLocalStorage));
  };

  const handleContinue = () => setSingleParam("round", currentRound + 1);

  const handleGoBack = () =>
    currentRound !== 1 && setSingleParam("round", currentRound - 1);

  // special kinds
  // sign up
  const handleEmailContinue = (data) => {
    handleStorage(data, "signUpData");
    setArrayOfParams({ email: data.email, round: currentRound + 1 });
  };
  const handleConfirmationContinue = (data) => {
    data.email = getSingleParam("email");
    handleStorage(data, "signUpData");
    handleContinue();
  };

  return {
    currentRound,
    handleStorage,
    handleContinue,
    handleGoBack,
    handleEmailContinue,
    handleConfirmationContinue,
  };
};
