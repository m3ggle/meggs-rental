import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

export const setUserEmail = async (uid, newEmail) => {
  try {
    await setDoc(doc(db, "users", uid), { email: newEmail }, { merge: true });
    return true;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};
