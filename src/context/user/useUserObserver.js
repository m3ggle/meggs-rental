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
            console.log(error.message)            
            // todo: toast, could not upload user data
        }
    }
  };
    
      window.onbeforeunload = function () {
        handleUserUpload()
      };

  // debounce
  useEffect(() => {
    const identifier = setTimeout(() => {
      handleUserUpload();
    }, 180000); // 3 min

    return () => {
      console.log("Clean up");
      clearTimeout(identifier); //needs an idetifier to point at a specific timeout
    };
  }, [userData]);
};
