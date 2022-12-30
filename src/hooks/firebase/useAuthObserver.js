import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNotifyModalContext } from "../../context/notifyModal/notifyModalContext";
import { useUserContext } from "../../context/user/userContext";
import { auth, db } from "../../firebase.config";

export const useAuthObserver = () => {
  const { dispatchUser, signedIn } = useUserContext();
  const {closeNotifyModal, isOpen} = useNotifyModalContext()

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

    // if the notify modal is open, close it
    // could be a problem if the notify modal is not used for auth
    if (isOpen) {
      closeNotifyModal()
    }
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
