import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase.config";

export const useGetUserByEmail = () => {
  const getUserByEmail = async (userEmail) => {
    let userInformation;

    const q = query(collection(db, "users"), where("email", "==", userEmail));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // there should never be two docs/user with the same email, so this should be fine
      userInformation = doc.data();
    });

    return userInformation;
  };

  return { getUserByEmail };
};
