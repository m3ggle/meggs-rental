import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase.config";
import { useUrlManipulation } from "./urlManipulation/useUrlManipulation";

export const useMultiStepHelper = () => {
  // mandatory
  const { searchParams, setSingleParam, setArrayOfParams, getSingleParam } =
    useUrlManipulation();
  const currentRound = getSingleParam("round") ? +getSingleParam("round") : 1;

  const navigate = useNavigate();
  const locationPathname = useLocation().pathname;

  useEffect(() => {
    !getSingleParam("round") && setSingleParam("round", 1);
  }, [searchParams]);

  // all functions
  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user; //this gives us the user

    // check for user in firestore
    const docRef = doc(db, "users", user.uid); //creates reference
    const docSnap = await getDoc(docRef);

    const params = {
      round: 3,
      apiKey: "AIzaSyC1ssliMOJ0ctBKYbefFn_IIm4PmqI0tPo",
      email: user.email,
    };

    // user does not exist
    if (!docSnap.exists()) {
      if (locationPathname === "/sign-up") {
        setArrayOfParams(params);
      } else {
        // Todo: toast
        console.log("you have an account but you are not verified");

        const nextSearchParams = new URLSearchParams(params);
        navigate(`/sign-up?${nextSearchParams}`);
      }

      return;
    }
    // else does....
    navigate("/homepage");
    // Todo: toast msg: you are already sign up, enjoy.
  };

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
  const  handleEmailContinue = (data) => {
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
    handleGoogle,
    handleEmailContinue,
    handleConfirmationContinue,
  };
};
