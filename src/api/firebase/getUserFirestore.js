import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

export const getUserFirestore = async (userId = "") => {
  const docSnap = await getDoc(doc(db, "users", userId));

  if (!docSnap.exists()) {
    console.log("user does not exist"); // todo: toast, this user does no exist
    return undefined;
  }

  const userData = docSnap.data();
  return userData;
};
