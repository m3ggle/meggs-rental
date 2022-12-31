import { doc, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../../firebase.config";
import { useUserContext } from "./userContext";

export const useUserObserver = () => {
  const { userData } = useUserContext();

  const handleUserUpload = async () => {
    console.log("upload");
    if (userData !== null) {
      try {
        await setDoc(doc(db, "users", userData.uid), userData);
      } catch (error) {
        console.log(error.message);
        // todo: toast, could not upload user data
      }
    }
  };

  /* this would solve the problem but every time the user wants to close or refresh the page he gets an annoying msg from the browser (u really want to close -_-)
  window.onbeforeunload = async function () {
    await handleUserUpload();
  };
   */

  // debounce
  useEffect(() => {
    // handleUserUpload(); 

    /* problem when the window gets closed and this function hasn't fired */
      const identifier = setTimeout(() => {
      handleUserUpload();
    }, 180000); // 3 min

    return () => {
      console.log("Clean up");
      clearTimeout(identifier); 
    };
    /* */
  }, [userData]);
};
