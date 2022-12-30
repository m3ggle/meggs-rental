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

export const useSignUpFinishLogic = () => {
  const { getSingleParam } = useUrlManipulation();
  const navigate = useNavigate();

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
      phoneNumber: auth.currentUser.phoneNumber,
      photoURL: "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FplaceholderPhoto.webp?alt=media&token=59ad9960-a335-41dd-83bf-e816d630e677",
      smoker: false,
      bio: null,
      timestamp: serverTimestamp(),
      favoriteOffers: [],
      ownOffers: [],
      chatRooms: [],
      lastViewedOffers: [],
      status: "Online",
    };

    const uploadPreparation = {
      uid: userInformation.uid,
      information: userInformation,
    };

    return uploadPreparation;
  };

  const handleFinish = async () => {
    // set up
    const userInformation = JSON.parse(localStorage.getItem("signUpData"));
    const userEmail = getSingleParam("email");
    userInformation.email = userEmail
    const apiKey =
      getSingleParam("apiKey") === "AIzaSyC1ssliMOJ0ctBKYbefFn_IIm4PmqI0tPo";

    // check if everything is alright
    if (!userEmail || !apiKey) {
      console.log("please click the link inside the email");
      return;
    }
    console.log(userInformation);
    if (!checkUserInformation(userInformation)) {
      console.log("information are not complete");
      return;
    }

    // firestore object preparation (user)
    const firestoreUserPrep = await userFirestorePreparation(userInformation);

    // actual call
    try {
      await Promise.all([
        firestoreSetUser(firestoreUserPrep),
        updateProfile(auth.currentUser, {
          displayName: userInformation.firstName,
        }),
      ]);
    } catch (error) {
      console.log("something went wrong", error);
    }

    // after call was successful
    navigate("/homepage");
    localStorage.removeItem("signUpData");
  };

  return { handleFinish };
};
