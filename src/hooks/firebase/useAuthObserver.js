import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useUserContext } from "../../context/user/userContext";
import { auth, db } from "../../firebase.config";

export const useAuthObserver = () => {
  const { dispatchUser, signedIn } = useUserContext();

  const handleSignIn = (userInformation) => {
    let preparation = {
      signedIn: true,
      verified: null,
      userData: userInformation,
    };

    // not verified
    if (!userInformation.displayName) {
      preparation.verified = false;
    }

    // verified
    if (userInformation.displayName) {
      preparation.verified = true;
    }

    dispatchUser({
      type: "SET_USER_CONTEXT",
      payload: preparation,
    });
  };

  const handleSignOut = () => {
    dispatchUser({
      type: "SET_USER_CONTEXT",
      payload: {
        signedIn: false,
        verified: false,
      },
    });
  };

  onAuthStateChanged(auth, async (user) => {
    if (user !== null) {
      // only for the first time logging in
      if (!signedIn) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          handleSignIn(docSnap.data());
          return;
        }
      }

      return;
    }

    // user signs out
    if (signedIn) {
      handleSignOut();
      return;
    }
  });
};
