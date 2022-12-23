import { updateProfile } from "firebase/auth";
import {
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { firestoreSetUser } from "../../../../api/firebase/useSetUserAPI";
import { auth, db } from "../../../../firebase.config";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";
import { useMultiStepHelper } from "../../../../hooks/useMultiStepHelper";

export const useSignUpCallback = () => {
  const {
    handleStorage,
    handleContinue,
    handleGoBack,
    handleGoogle,
    handleEmailContinue,
    handleConfirmationContinue,
  } = useMultiStepHelper();

  const navigate = useNavigate();

  const { getSingleParam } = useUrlManipulation();

  const checkUserInformation = (userInformation) => {
    return (
      userInformation.email &&
      userInformation.firstName &&
      userInformation.lastName &&
      userInformation.birthday &&
      userInformation.gender &&
      userInformation.preferredCity
    );
  };

  const userFirestorePreparation = async (userInformation) => {
    const userEmail = getSingleParam("email");

    // user id
    if (auth.currentUser) {
      userInformation.uid = auth.currentUser.uid;
    } else {
      // no auth happens when user clicks on the link and it opens up in another browser or private mode
      const q = query(collection(db, "users"), where("email", "==", userEmail));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // there should never be two docs/user with the same email, so this should be fine
        userInformation.uid = doc.data().uid;
      });

      if (!userInformation.uid) {
        console.log("no id was found, user does not exist in database");
        return;
      }
    }

    // rest
    delete userInformation.city;
    delete userInformation.password;
    userInformation = {
      ...userInformation,
      displayName: userInformation.firstName,
      phoneNumber: null,
      photoURL: null,
      smoker: false,
      timestamp: serverTimestamp(),
      favoriteOffers: [],
      ownOffers: [],
      chatRooms: [],
      lastViewedOffers: [],
      status: "Online",
    };

    const uploadPreparation = {
      uid: userInformation.uid,
      information: userInformation
    };

    console.log("finished prep: ", uploadPreparation)

    return uploadPreparation;
  };

  const handleFinish = async () => {
    const userInformation = JSON.parse(localStorage.getItem("signUpData"));

    const userEmail = getSingleParam("email");
    const apiKey =
      getSingleParam("apiKey") === "AIzaSyC1ssliMOJ0ctBKYbefFn_IIm4PmqI0tPo";

    if (!userEmail || !apiKey) {
      console.log("please click the link inside the email");
      return;
    }

    if (!checkUserInformation(userInformation)) {
      console.log("information are not complete");
      return;
    }

    const firestoreUserPrep = await userFirestorePreparation(userInformation);

    try {
      // await firestoreSetUser(firestoreUserPrep);
      // console.log("uploaded")
      // await updateProfile(auth.currentUser, {
      //   displayName: userInformation.firstName,
      // });
      console.log("for upload: ", firestoreUserPrep);
      const result = await Promise.all([
        firestoreSetUser(firestoreUserPrep),
        updateProfile(auth.currentUser, {
          displayName: userInformation.firstName,
        }),
      ]);
      
      console.log(result)
      navigate("/homepage");
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  const handleCallback = ({ data, nextStep }) => {
    switch (nextStep) {
      case "google":
        handleGoogle();
        break;
      case "email":
        handleEmailContinue(data);
        handleStorage(data, "signUpData");
        break;
      case "confirmation":
        handleConfirmationContinue(data);
        handleStorage(data, "signUpData");
        break;
      case "finish":
        handleFinish();
        // localStorage.removeItem("signUpData");
        // navigate("/homepage");
        break;
      case true:
        handleContinue();
        handleStorage(data, "signUpData");
        break;
      case false:
        handleGoBack();
        break;
      default:
        break;
    }
  };

  return { handleCallback };
};
