import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

/*
preferred input

userInformation = {
    uid: ...,
    information: { ... }
}
*/

export const firestoreSetUser = async (userInformation) => {
  const { uid, information } = userInformation;
  
  console.log("uploading: ", userInformation);
  try {
    await setDoc(doc(db, "users", uid), { ...information }, { merge: true });
  } catch (error) {
    return error;
  }
};
